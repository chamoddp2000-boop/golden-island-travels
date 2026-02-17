
import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const envPath = path.resolve(__dirname, '.env')
const envContent = fs.readFileSync(envPath, 'utf-8')
const envVars = envContent.split('\n').reduce((acc, line) => {
    const [key, value] = line.split('=')
    if (key && value) {
        acc[key.trim()] = value.trim()
    }
    return acc
}, {})

const supabaseUrl = envVars.VITE_SUPABASE_URL
const supabaseAnonKey = envVars.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkStorage() {
    console.log('Checking storage buckets...')
    const { data, error } = await supabase.storage.listBuckets()

    if (error) {
        console.error('Error listing buckets:', error.message)
        return
    }


    const bucket = data ? data.find(b => b.name === 'review-images') : null

    if (bucket) {
        console.log('✅ Bucket "review-images" found in list.')
    } else {
        console.log('⚠️ Bucket "review-images" NOT found in list (might be permissions). Attempting upload anyway...')
    }

    // Try uploading a test file
    console.log('Attempting to upload a test file...');
    const { data: uploadData, error: uploadError } = await supabase.storage
        .from('review-images')
        .upload('test_upload.txt', 'This is a test file', { upsert: true });

    if (uploadError) {
        console.error('❌ Upload failed:', uploadError.message);
    } else {
        console.log('✅ Upload successful:', uploadData);
        // Clean up
        await supabase.storage.from('review-images').remove(['test_upload.txt']);
        console.log('Test file cleaned up.');
    }
}

checkStorage()

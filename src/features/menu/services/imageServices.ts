import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export async function uploadImage(imgUrl: string) {

  const croppedBlob = await (await fetch(imgUrl)).blob();

  const ext = croppedBlob.type.split('/')[1] || 'jpg';
  const croppedFile = new File([croppedBlob], `meal-image.${ext}`, { type: croppedBlob.type });

  const filePath = `${Date.now()}_${croppedFile.name}`;


  const { data, error } = await supabase
    .storage
    .from('public-assets')
    .upload(filePath, croppedFile, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) {
    console.error('Upload failed:', error.message)
    throw error
  }

  const { data: publicUrlData } = supabase
    .storage
    .from('public-assets')
    .getPublicUrl(data.path)

  return publicUrlData.publicUrl
}
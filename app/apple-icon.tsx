import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  // Read the image file
  const imagePath = path.join(process.cwd(), 'public', 'fav-logo.jpg');
  const imageData = fs.readFileSync(imagePath);
  const base64Image = `data:image/jpeg;base64,${imageData.toString('base64')}`;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img 
          src={base64Image} 
          alt="Apple Touch Icon" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
} 
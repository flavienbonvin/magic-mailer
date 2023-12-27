export const getImageURL = (imageName?: string) => {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Magic%20Mailer/${imageName}`;
};

export const getSocialImageURL = () => {
  return {
    globe: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Static/globe.png`,
    facebook: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Static/facebook.png`,
    instagram: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Static/instagram.png`,
  };
};

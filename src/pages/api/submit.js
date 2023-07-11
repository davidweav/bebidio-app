// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {

  const liquor = req.body.radioLiquor;
  const flavor = req.body.flavor;
  const color = req.body.color;

  res.redirect(`../../drinkDisplay?liquor=${liquor}&flavor=${flavor}&color=${color}`);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {

  if (req.method === 'POST') {
    const liquor = req.body.radioLiquor;
    const flavor = req.body.flavor;
    const color = req.body.color;
    console.log("test");
    res.redirect(`../../drinkDisplay?liquor=${liquor}&flavor=${flavor}&color=${color}`);
  } else {

    res.status(405).end();
  }
  
}

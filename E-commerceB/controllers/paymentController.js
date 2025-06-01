let stripe = require("stripe")(process.env.STRIPE_KEY);
exports.getStripeLink=async (req,res,next) => {
    const lineItems = [{
        price_data:{
            currency:"usd",
            product_data:{
                name:req.body.item,
                images:[req.body.image]
            },
            unit_amount:req.body.price*100,
        },
    quantity:1}] 

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:5173/E-comm",
        cancel_url:"http://localhost:5173/E-comm"
    })

    res.json({url:session.url})
}
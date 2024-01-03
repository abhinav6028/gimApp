import React from 'react'

function page() {

    const emailAddress = 'contact@fitpeps.com'
    return (
        <div style={{ padding: '40px', lineHeight: 1.5 }}>
            <div>
                <img src="/Assets/logo.png" alt="" style={{ width: '200px', }} />
            </div>
            <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}>SHIPPING POLICY</h4>
                <p style={{ marginTop: '20px' }} >
                    Shipping policy All orders are processed within
                    5 to 7 business days (excluding weekends and holidays) after receiving your order confirmation email.
                    You will receive another notification when your order has shipped.

                </p>
                <p style={{ marginTop: 10 }}></p>
            </div>
            <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}>DOMESTIC SHIPPING RATES</h4>
                <p style={{ marginTop: '20px' }} >
                    Shipping charges for your order will be Free but for Express Delivery you need to pay 50 Extra.
                </p>
                <table>
                    <thead>
                        <th>SHIPPING OPTION</th>
                        <th>ESTIMATED DELIVERY TIME</th>
                        <th>PRICE</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Free Delivery</td>
                            <td>5 to 7 Business days</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td>Express Delivery</td>
                            <td>3 to 5 Business days</td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}>HOW DO I CHECK THE STATUS OF MY ORDER?</h4>
                <p style={{ marginTop: '20px' }} >
                    When your order has shipped,
                    you will receive an email notification from us which will include a tracking number you can use to check its status.
                    Please allow 48 hours for the tracking information to become available.
                    If you haven’t received your order within 7 days of receiving your shipping confirmation email,
                    please contact us at- {emailAddress}. with your name and order number, and we will look into it for you.

                </p>
            </div>
            <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}>CANCELLATION POLICY</h4>
                <p style={{ marginTop: '20px' }} >
                    In case you want to cancel your order, you can simply log in to your Account and cancel your order.
                    Feel Free to reach out to us on +919600204302.   There are no cancellation charges.
                    If you already paid for your order then we will refund your amount within 3-5 Business days.
                    Your bank can take some time to reflect in your Bank Account If you have any further questions,
                    please don’t hesitate to contact us at- {emailAddress}
                </p>
            </div>






            <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}></h4>
                <p style={{ marginTop: '20px' }} ></p>
                <p style={{ marginTop: 10 }}></p>
            </div>
            {/* <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}></h4>
                <p style={{ marginTop: '20px' }} ></p>
                <p style={{ marginTop: 10 }}></p>
                <ul style={{ margin: 40 }}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div> */}
        </div>
    )
}

export default page
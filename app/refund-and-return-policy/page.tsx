import React from 'react'

function page() {

    const emailAddress = 'contact@fitpeps.com'
    return (
        <div style={{ padding: '40px', lineHeight: 1.5 }}>
            <div>
                <img src="/Assets/logo.png" alt="" style={{ width: '200px', }} />
            </div>
            <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}>OVERVIEW</h4>
                <p style={{ marginTop: '20px' }} >Our refund and returns policy lasts 30 days.
                    If 30 days have passed since your purchase, we can’t offer you a full refund or exchange.</p>
                <p style={{ marginTop: 10 }}>To be eligible for a return, your item must be unused and in the same condition that you received it.
                    It must also be in the original packaging.</p>
                <p style={{ marginTop: '20px' }} >Several types of goods are exempt from being returned.
                    Perishable goods such as food, flowers, newspapers or magazines cannot be returned.
                    We also do not accept products that are intimate or sanitary goods, hazardous materials,
                    or flammable liquids or gases.</p>
                <p style={{ marginTop: '20px' }} >Additional non-returnable items:</p>
                <ul style={{ margin: 40 }}>
                    <li>Some health and personal care items</li>
                </ul>

                <p style={{ marginTop: '20px' }} >To complete your return, we require a receipt or proof of purchase.</p>
                <p style={{ marginTop: '20px' }} >Please do not send your purchase back to the manufacturer.</p>
                <p style={{ marginTop: '20px' }} >There are certain situations where only partial refunds are granted:</p>
                <ul style={{ margin: 40 }}>
                    <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
                    <li>Any item that is returned more than 30 days after delivery</li>
                </ul>
            </div>
            <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}>REFUNDS</h4>
                <p style={{ marginTop: '20px' }} >Once your return is received and inspected,
                    we will send you an email to notify you that we have received your returned item.
                    We will also notify you of the approval or rejection of your refund.</p>
                <p style={{ marginTop: 10 }}>
                    If you are approved, then your refund will be processed,
                    and a credit will automatically be applied to your credit card or original method of payment,
                    within a certain amount of days.
                </p>
                <h6 style={{ fontSize: '16px', fontWeight: 600, marginTop: '30px' }}>Late or missing refunds</h6>
                <p style={{ marginTop: '20px' }} >
                    If you haven’t received a refund yet, first check your bank account again.
                </p>
                <p style={{ marginTop: '20px' }} >
                    Then contact your credit card company, it may take some time before your refund is officially posted.
                </p>

                <p style={{ marginTop: '20px' }} >
                    Next contact your bank. There is often some processing time before a refund is posted.
                </p>
                <p style={{ marginTop: '20px' }} >
                    If you’ve done all of this and you still have not received your refund yet, please contact us at {emailAddress}.
                </p>
                <h4 style={{ fontSize: '16px', fontWeight: 600, marginTop: '30px' }}>Sale Items</h4>
                <p style={{ marginTop: '20px' }} >
                    Only regular priced items may be refunded. Sale items cannot be refunded.

                </p>

            </div>
            <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}>EXCHANGES</h4>
                <p style={{ marginTop: '20px' }} >
                    We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at {emailAddress}.
                </p>
                <p style={{ marginTop: 10 }}></p>
            </div>
            <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}>SHIPPING RETURNS</h4>
                <p style={{ marginTop: '20px' }} >
                    To return your product, you should mail your product to: {emailAddress}.
                </p>
                <p style={{ marginTop: 10 }}>
                    You will be responsible for paying for your own shipping costs for returning your item.
                    Shipping costs are non-refundable.
                    If you receive a refund, the cost of return shipping will be deducted from your refund.
                </p>
                <p style={{ marginTop: 10 }}>
                    Depending on where you live, the time it may take for your exchanged product to reach you may vary.
                </p>
                <p style={{ marginTop: 10 }}>
                    If you are returning more expensive items,
                    you may consider using a trackable shipping service or purchasing shipping insurance.
                    We don’t guarantee that we will receive your returned item.
                </p>
            </div>
            <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}>NEED HELP?</h4>
                <p style={{ marginTop: '20px' }} >
                    Contact us at {emailAddress} for questions related to refunds and returns.
                </p>
                <p style={{ marginTop: 10 }}></p>
            </div>




            {/* <div style={{ marginTop: '80px' }} className='space-y-5'>
                <h4 style={{ fontSize: '30px', }}></h4>
                <p style={{ marginTop: '20px' }} ></p>
                <p style={{ marginTop: 10 }}></p>
            </div> */}
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
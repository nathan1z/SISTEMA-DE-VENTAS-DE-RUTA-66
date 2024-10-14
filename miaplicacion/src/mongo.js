const {MongoClient} = require('mongodb');

async function main(){

    const uri = "mongodb+srv://Grupo2:rlRlqwvolcUBzS5h@cluster0.7em3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        await createListing(client,
            {
                name: "Lovely Loft",
                summary: "A charming loft in Paris",
                bedrooms: 1,
                bathrooms: 1
            }
        );
    } finally {
        await client.close();
    }
}

main().catch(console.error);
async function createListing(client, newListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}
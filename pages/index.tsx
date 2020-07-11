import { useState } from 'react'
import { useRouter } from 'next/router'
import Airtable from 'airtable'
import '@assets/styles.less'

// == View Layer Components ====
import { Typography } from 'antd'
import MainLayout from '@layouts/main'
const { Title } = Typography


export default function Home(): JSX.Element {
    const [inputValue, setInputValue] = useState<number>(2);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()

    const base = new Airtable({ apiKey: 'keyYQGz5RC2dOKH1s' }).base('appSStf2qCCb5JWTg');
    base('directory_db').select({
        // Selecting the first 3 records in Baddies in Tech Directory Application:
        maxRecords: 3,
        view: "Baddies in Tech Directory Application"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
            console.log('Retrieved', record.fields);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });


    console.log(base)

    return (
        <MainLayout>
            <Title>Find a Baddie</Title>

        </MainLayout>
    )
}



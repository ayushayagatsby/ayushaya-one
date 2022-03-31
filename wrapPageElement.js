import React from "react"
import Layout from './src/components/layout'
import LanguageStore from "./src/context/LanguageStore"

const wrapPageElement = ({element}) => (
    <LanguageStore>
        <Layout>{element}</Layout>
    </LanguageStore>
)

export default wrapPageElement
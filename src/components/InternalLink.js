import React, {useState, useEffect} from 'react'
import {Link} from "gatsby"
import {css, jsx} from '@emotion/react'


export default function InternalLink({
    href,
    children,
    menuItem = true,
    w
}) {

    const [isNewPage,
        setIsNewPage] = useState(false);

    useEffect(() => {

        if (isNewPage) {
            const wrapper = document.getElementById("layout-wrapper");
            wrapper.scrollTo(0, 0);
        }

    }, [isNewPage])

    const handleMenuItem = () => {
        if (menuItem) {
            setIsNewPage(true)
        }

        return null
    }

    return (
        <Link to={href} className="internal-link" onClick={handleMenuItem} css={css `width: ${w ? w : "auto"};`}>{children}</Link>
    )
}

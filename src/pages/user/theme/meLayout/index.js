import{memo } from "react";
import Header from "../header";

import Footer from "../footer/footer";


const MeLayout = ({children, ... props }) => {
    return (
        <div {... props}>
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
    );
}

export default memo(MeLayout);
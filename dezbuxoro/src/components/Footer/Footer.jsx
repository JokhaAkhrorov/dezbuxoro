import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { i18n, t } = useTranslation();
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2025 Buxoro viloyat dezinfeksiya markazi. Barcha huquqlar himoyalangan.</p>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';


interface FooterSectionProps {
    title: string;
    items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
    return (
        <div className="mb-4">
            <h5 className="text-lg  font-semibold mb-2 mx-4 mt-0">{title}</h5>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="text-gray-400 hover:text-white mb-1 cursor-pointer">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    
    const aboutItems = ['About Me','Contact Me' ,'Portfolio', 'Linkdin'];
    const servicesItems = ['Web Development', 'Python Developer', 'Django Developer', 'Leaning React'];
    const supportItems = ['Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy'];

    return (
        <footer className="bg-pink-800 text-white py-8 mt-10 pb-11">
            <div className="container px-3 grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto">
                    <FooterSection title="About" items={aboutItems} />
                    <FooterSection title="Services" items={servicesItems} />
                    <FooterSection title="Support" items={supportItems} />
            </div>
            <div className="container mx-auto px-4 text-center mt-8">
                <p>© {currentYear} Welcome To My React App 😍.</p>
                <p> ❤️Developed by Manjula Kethavath ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;

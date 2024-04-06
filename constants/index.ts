import victory from '@/public/icons/victory.svg';
import quality from '@/public/icons/quality.svg';
import generation from '@/public/icons/generation.svg';


export const navLinks = [
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Order a Suit" },
    { href: "#testimonials", label: "Experiences" },
    { href: "#services", label: "Services" },
    { href: "#newsletter", label: "Newsletter" },
];

export const serviceIcons = [
    {icon: victory, text: "Exceeding expectations since 1924."},
    {icon: quality, text: "Where quality is never compromised."},
    {icon: generation, text: "Crafting excellence for generations."},
]

export const popularProducts = [
    {image:"/images/look.png", name:"Full Dark Green Suit", price:"1000$", href:""},
    {image:"/images/shirt.png", name:"Men's White Shirt", price:"1500$", href:""},
    {image:"/images/pants.png", name:"Men's Dark Green Pants", price:"900$", href:""},
    {image:"/images/vest.png", name:"Men's Dark green Jacket", price:"2000$", href:""},
    {image:"/images/shirt.png", name:"Men’s White Shirt", price:"100$", href:""},
    {image:"/images/look.png", name:"LOOOOOOOOk", price:"9999$", href:""}
]

export const aboutUsData = [
    {title:"Why are we here?", 
    content:`For over a <span className='special-text'>century</span>, our shop has been the epitome of elegance,
    offering <span className='special-text'>premium</span> suits crafted with aralleled expertise.
    With a legacy  spanning generations.`,
    buttonTitle:"Learn More",
    href:"#home"},
    
    {title:"Who are we?", 
    content:`Established <span className='special-text'>over a century ago</span>, our shop has been synonymous with
                    timeless elegance and superior craftsmanship <span className='special-text'>since 1927</span>`,
    buttonTitle:"Learn More",
    href:"#home"}
]

export const socialMedia = [
    { src: "/icons/facebook.svg", alt: "facebook logo" },
    { src: "/icons/twitter.svg", alt: "twitter logo" },
    { src: "/icons/instagram.svg", alt: "instagram logo" },
];

export const footerLinks = [
    {
        title: "Customer Service",
        links: [
            { name: "Returns & Exchanges", link: "/" },
            { name: "My Account", link: "/" },
            { name: "Store Locations", link: "/" },
            { name: "Help Center", link: "/" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "News & Events", link: "/" },
            { name: "Careers", link: "/" },
            { name: "Sustainability", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@wsuit.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", link: "/" },
            { name: "Terms Of Service", link: "/" },
            { name: "Privacy Preferences", link: "/" },
        ],
    },
];
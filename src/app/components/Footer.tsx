import Link from "next/link";


const footerLinks = [
    {
        href: 'https://linkedin.com/in/kyle-brooks-a05053bb',
        text: 'LinkedIn'
    },
    {
        href: '/brooks_kyle_resume.pdf',
        text: 'Resume'
    },
    {
        href: 'https://github.com/KyleBrooks242',
        text: 'GitHub'
    }

];

const getFooterLinks = () => {
    return footerLinks.map(link => {
        return <Link key={link.text} className='btn btn-sm btn-outline w-28' href={link.href} target='_blank'>{link.text}</Link>
    })
}



export default function Footer () {

    return (
        <footer className="footer bg-primary p-3 rounded-t-md mt-auto">
            <nav className="flex flex-row justify-evenly w-full">
                {getFooterLinks()}
            </nav>
        </footer>
    )
}

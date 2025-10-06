const navItems = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "Shoes", href: "/shoes" },
    {
        title: "Mens",
        children: [
            { title: "T-Shirts", href: "/mens/t-shirts" },
            { title: "Shirts", href: "/mens/shirts" },
        ],
    },
    {
        title: "Womens",
        children: [
            { title: "Dresses", href: "/womens/dresses" },
            { title: "Tops", href: "/womens/tops" },
        ],
    },
    {
        title: "Kids",
        children: [
            {
                title: "Boys",
                children: [
                    { title: "T-Shirts", href: "/kids/boys/t-shirts" },
                    { title: "Shirts", href: "/kids/boys/shirts" },
                ],
            },
            {
                title: "Girls",
                children: [
                    { title: "Dresses", href: "/kids/girls/dresses" },
                    { title: "Tops", href: "/kids/girls/tops" },
                ],
            },
        ],
    },
]

export { navItems }

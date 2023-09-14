import { IProduct } from "./assets/components/indterfaceData/IProduct";


export const products: IProduct[] = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: ["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 'https://i.pinimg.com/originals/34/29/93/342993ef5d6ed08891993031c5e3cecc.jpg'],
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: ["https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", 'https://www.wallpaperflare.com/static/948/57/70/phone-communication-wire-white-wallpaper.jpg'],
        rating: {
            rate: 4.1,
            count: 259
        }
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: ["https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 'https://sun9-40.userapi.com/impg/VKzMcEU5BjhYYO24uoZmqweJnYCrGCmQYLmTyg/qf4OeRhUgSQ.jpg?size=1280x853&quality=96&sign=251ed8118fd4d1b5a90a29c82be17b82&c_uniq_tag=RAPLKWfaReb7FusyEQFWSIPgqUcucbBvyOYxuuCre-4&type=album'],
        rating: {
            rate: 4.7,
            count: 500
        }
    }
]

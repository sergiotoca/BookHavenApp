import gatsbyImg from './gatsby_img.png';
import invisibleManImg from './invisible_man_img.png';
import briefHistoryTimeImg from './brief_history_time_img.png';
import sapiensImg from './sapiens_img.png';
import catcherRyeImg from './catcher_rye_img.png';
import img1984 from './1984_img.png';
import originSpeciesImg from './origin_species_img.png';
import gunsGermsSteelImg from './guns_germs_steel_img.png';
import toKillMockingbirdImg from './to_kill_mockingbird_img.png';
import braveNewWorldImg from './brave_new_world_img.png';

let all_books = [
    {
        id: 1,
        name: "The Great Gatsby",
        category: "classic",
        image: gatsbyImg,
        new_price: 15.0,
        old_price: 20.0
    },
    {
        id: 2,
        name: "Invisible Man",
        category: "modern",
        image: invisibleManImg,
        new_price: 12.5,
        old_price: 18.0
    },
    {
        id: 3,
        name: "A Brief History of Time",
        category: "science",
        image: briefHistoryTimeImg,
        new_price: 10.0,
        old_price: 14.0
    },
    {
        id: 4,
        name: "Sapiens: A Brief History of Humankind",
        category: "history",
        image: sapiensImg,
        new_price: 18.0,
        old_price: 22.0
    },
    {
        id: 5,
        name: "The Catcher in the Rye",
        category: "classic",
        image: catcherRyeImg,
        new_price: 7.0,
        old_price: 12.0
    },
    {
        id: 6,
        name: "1984",
        category: "modern",
        image: img1984,
        new_price: 9.0,
        old_price: 14.0
    },
    {
        id: 7,
        name: "The Origin of Species",
        category: "science",
        image: originSpeciesImg,
        new_price: 17.0,
        old_price: 25.0
    },
    {
        id: 8,
        name: "Guns, Germs, and Steel",
        category: "history",
        image: gunsGermsSteelImg,
        new_price: 20.0,
        old_price: 30.0
    },
    {
        id: 9,
        name: "To Kill a Mockingbird",
        category: "classic",
        image: toKillMockingbirdImg,
        new_price: 12.0,
        old_price: 18.0
    },
    {
        id: 10,
        name: "Brave New World",
        category: "modern",
        image: braveNewWorldImg,
        new_price: 13.5,
        old_price: 21.0
    }
];

export { all_books };
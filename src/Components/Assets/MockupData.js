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
        old_price: 20.0,
        short_description: "A tale of mystery and tragedy, revealing the dark sides of the American dream.",
        long_description: "Set in the roaring twenties, this classic American novel explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Jazz Age that has been described as a cautionary tale regarding the American Dream.",
        reviews: [
            { stars: 5, text: "Absolutely captivating, a quintessential American story." },
            { stars: 4, text: "Beautifully written, though the pacing might feel slow to some." },
            { stars: 5, text: "A poignant reflection on the American Dream, still relevant today." },
            { stars: 3, text: "Fascinating characters but the storyline didn't quite hook me." },
            { stars: 5, text: "A tragic story of love and illusion, masterfully told." }
        ]
    },
    {
        id: 2,
        name: "Invisible Man",
        category: "modern",
        image: invisibleManImg,
        new_price: 12.5,
        old_price: 18.0,
        short_description: "An intense exploration of identity and race.",
        long_description: "The story of a nameless narrator who describes growing up in a black community in the South, attending and being expelled from a black college, and moving to New York where he becomes the chief spokesman of the Harlem branch of 'the Brotherhood'.",
        reviews: [
            { stars: 5, text: "A powerful and evocative narrative that dives deep into the core of identity and society." },
            { stars: 4, text: "An essential read for understanding racial issues in America." },
            { stars: 5, text: "Profound and moving, a must-read for anyone interested in American literature." },
            { stars: 3, text: "Challenging yet rewarding, this book requires your full attention." },
            { stars: 4, text: "Deeply philosophical, it's more than just a story—it's an experience." }
        ]
    },
    {
        id: 3,
        name: "A Brief History of Time",
        category: "science",
        image: briefHistoryTimeImg,
        new_price: 10.0,
        old_price: 14.0,
        short_description: "A landmark volume in science writing by one of the great minds of our time.",
        long_description: "Stephen Hawking explores profound questions such as how did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries?",
        reviews: [
            { stars: 5, text: "Fascinating insights into cosmology, very accessible to the layperson." },
            { stars: 4, text: "Hawking brings complex concepts down to earth with clear explanations and wit." },
            { stars: 4, text: "Engaging and thought-provoking, though sometimes the content gets very technical." },
            { stars: 5, text: "A masterful work that challenges perceptions of reality and our place in the universe." },
            { stars: 5, text: "Must-read for anyone interested in physics and our cosmic story." }
        ]
    },
    {
        id: 4,
        name: "Sapiens: A Brief History of Humankind",
        category: "history",
        image: sapiensImg,
        new_price: 18.0,
        old_price: 22.0,
        short_description: "Exploring the ways in which biology and history have defined us.",
        long_description: "Yuval Noah Harari spans the entire history of humankind, from the very first humans to walk the earth to the radical—and sometimes devastating—breakthroughs of the Cognitive, Agricultural, and Scientific Revolutions.",
        reviews: [
            { stars: 5, text: "An eye-opening narrative that reshapes the way we think about human history and our future." },
            { stars: 4, text: "Harari presents a compelling overview of human history. Some interpretations are debatable but always thought-provoking." },
            { stars: 5, text: "Incredible depth, breadth, and readability. A transformative perspective on history." },
            { stars: 4, text: "Provocative and enlightening, though sometimes oversimplified." },
            { stars: 5, text: "A fascinating read that challenges traditional views and provokes deep thought about humanity's past and future." }
        ]
    },
    {
        id: 5,
        name: "The Catcher in the Rye",
        category: "classic",
        image: catcherRyeImg,
        new_price: 7.0,
        old_price: 12.0,
        short_description: "A story about a teenager's right of passage into adulthood.",
        long_description: "Follows the experiences of sixteen-year-old Holden Caulfield, as he wanders New York City, critiquing the adult world and searching for authenticity in the 'phony' society around him.",
        reviews: [
            { stars: 4, text: "A defining novel of teenage angst and alienation." },
            { stars: 3, text: "Resonates with young adults but might not hold the same charm for all readers." },
            { stars: 5, text: "Timeless themes of identity, rebellion, and disillusionment." },
            { stars: 4, text: "Still a relevant and powerful read about growing up and finding one's place in the world." },
            { stars: 5, text: "Holden's voice is as engaging and relevant today as it was when first published." }
        ]
    },
    {
        id: 6,
        name: "1984",
        category: "modern",
        image: img1984,
        new_price: 9.0,
        old_price: 14.0,
        short_description: "A dystopian novel about the dangers of totalitarianism.",
        long_description: "George Orwell's tale features a society governed by Big Brother where people are controlled by fear, surveillance, and propaganda, highlighting the erosion of truth and freedom in a totalitarian regime.",
        reviews: [
            { stars: 5, text: "A chilling and profound warning of a future that is all too conceivable." },
            { stars: 5, text: "Orwell's dystopian vision is a powerful critique of totalitarian regimes and their grip on society." },
            { stars: 4, text: "Intense and terrifying, a must-read for its stark portrayal of power and control." },
            { stars: 5, text: "1984 is both an intellectual and emotional read that challenges the spirit." },
            { stars: 4, text: "A seminal work that remains relevant in today's digital and surveillance-heavy age." }
        ]
    },
    {
        id: 7,
        name: "The Origin of Species",
        category: "science",
        image: originSpeciesImg,
        new_price: 17.0,
        old_price: 25.0,
        short_description: "Charles Darwin's groundbreaking work on evolutionary biology.",
        long_description: "Darwin's text introduced the scientific theory that populations evolve over the course of generations through a process of natural selection. It presented a body of evidence that the diversity of life arose by common descent through a branching pattern of evolution.",
        reviews: [
            { stars: 5, text: "A monumental work that fundamentally changed how we view natural history." },
            { stars: 4, text: "Provocative and detailed, Darwin's theories are as fascinating as they are revolutionary." },
            { stars: 5, text: "Essential reading for anyone interested in the sciences." },
            { stars: 5, text: "The depth of research and thoughtfulness of Darwin's work is unmatched." },
            { stars: 4, text: "A challenging read, but incredibly rewarding for those interested in the mechanisms of life on Earth." }
        ]
    },
    {
        id: 8,
        name: "Guns, Germs, and Steel",
        category: "history",
        image: gunsGermsSteelImg,
        new_price: 20.0,
        old_price: 30.0,
        short_description: "A fascinating exploration of the reasons why certain societies have survived and conquered others.",
        long_description: "Jared Diamond examines the environmental and geographical reasons why some societies have advanced faster than others, focusing on factors such as the availability of natural resources, the development of agricultural tools, and the spread of germs and diseases.",
        reviews: [
            { stars: 5, text: "An expansive and insightful exploration of the complex factors that shape human history." },
            { stars: 4, text: "A broad, ambitious approach to understanding the forces behind civilization." },
            { stars: 5, text: "Diamond's thesis provides a compelling framework for analyzing historical developments." },
            { stars: 4, text: "Insightful and thought-provoking, though sometimes controversial in its conclusions." },
            { stars: 5, text: "A must-read for those interested in the development of societies and cultures." }
        ]
    },
    {
        id: 9,
        name: "To Kill a Mockingbird",
        category: "classic",
        image: toKillMockingbirdImg,
        new_price: 12.0,
        old_price: 18.0,
        short_description: "A powerful tale of racial injustice in a Southern town.",
        long_description: "Harper Lee's novel is set in the Depression-era South, where a black man is wrongfully accused of raping a white woman, and the moral courage a lawyer shows in defending him against the prejudiced system.",
        reviews: [
            { stars: 5, text: "A profound and moving story that touches the core of empathy and justice." },
            { stars: 5, text: "Lee's narrative captures the complexities of race and justice with remarkable nuance and insight." },
            { stars: 4, text: "A timeless and essential read for understanding American history and culture." },
            { stars: 5, text: "Emotionally powerful and beautifully written, a definitive classic." },
            { stars: 4, text: "Challenges readers to reflect on their own moral choices in the face of prejudice." }
        ]
    },
    {
        id: 10,
        name: "Brave New World",
        category: "modern",
        image: braveNewWorldImg,
        new_price: 13.5,
        old_price: 21.0,
        short_description: "A prophetic and unsettling novel forecasting a dystopian future.",
        long_description: "Aldous Huxley's vision of a future human society is dominated by technology and government control where people are engineered into an intelligence-based social hierarchy, and happiness is mandated by the state.",
        reviews: [
            { stars: 5, text: "A visionary and disturbing look at a possible future, driven by technological excess." },
            { stars: 4, text: "A critical examination of the pursuit of happiness and control through technology." },
            { stars: 5, text: "Huxley's dystopia is terrifying in its foresight and implications for our current world." },
            { stars: 4, text: "Provokes deep thought about freedom, happiness, and societal control." },
            { stars: 5, text: "Brilliantly imaginative and chillingly plausible." }
        ]
    }
];

export { all_books };

import { FaRegSquareCheck } from "react-icons/fa6";
import { CardInfo } from "../component/ui/CardInfo";
import { Section } from "../component/ui/Section";

export const About = () => {
    const cardAbout = [
        {
            title: "Family owned",
            description: "Opened since 2005, we’re proud to be a family-owned business that’s been serving up delicious meals for over a decade."
        },
        {
            title: "Premium ingredients",
            description: "You shouldn’t have to choose between quality and convenience. That’s why we use only the best ingredients in every dish."
        },
        {
            title: "Flexible Event Hosting",
            description: "We offer a range of catering options for your next event, from drop-off service to full-service catering."
        }
    ]
    return (
        <div className="2xl:h-screen h-fit bg-gradient-to-t from-red-200 to-white">
            <div className="h-[72px]"></div>
            <Section className="h-full">
                <div className="flex flex-row mx-auto items-center p-4 text-xl w-[92%] gap-4 ">
                    <h1 className="md:text-3xl font-bold text-red-700 relative">
                        ABOUT US
                    </h1>
                    <div className="w-24 pt-[1%] border-b-2 border-red-700"></div>
                </div>
                <div className='flex flex-col md:flex-row justify-center text-justify mx-auto p-4 text-xl w-[92%] gap-6'>
                    <div>
                        <h4 className='font-bold'>Fast, Delicious, and Unforgettable</h4>
                        <p>
                            At <strong>5th Station</strong>, we know fast food can be more than just quick—it can be an experience. For years, we’ve been serving up smiles and satisfying cravings with every order. Here’s what makes us special:
                        </p>
                        <br />
                        <ul>
                            <li className="flex flex-row gap-4 items-center">
                                <div className="h-full flex items-center">
                                    <FaRegSquareCheck className="w-6 h-6" />
                                </div>
                                <p>
                                    <strong>Friendly Service: </strong> Our team is here to greet you with a smile and ensure your visit is nothing short of amazing.
                                </p>
                            </li>
                            <li className="flex flex-row gap-4 items-center">
                                <div className="h-full flex items-center">
                                    <FaRegSquareCheck className="w-6 h-6" />
                                </div>
                                <p>
                                    <strong>Expertly Crafted Meals:</strong> From juicy burgers to crispy fries, every item is made fresh with top-quality ingredients.
                                </p>
                            </li>
                            <li className="flex flex-row gap-4 items-center">
                                <div className="h-full flex items-center">
                                    <FaRegSquareCheck className="w-6 h-6" />
                                </div>
                                <p>
                                    <strong>Something for Everyone:</strong> A wide-ranging menu packed with tasty options for every craving, whether you're on the go or sitting down to enjoy.
                                </p>
                            </li>
                        </ul>
                        <br />

                        <p>
                            We want 5th to feel like your favorite spot to grab a meal, whether it’s a quick bite or a chance to unwind with friends. Our welcoming vibe, speedy service, and crave-worthy food make every visit feel like a treat—because you deserve it.
                        </p>
                    </div>
                    <img
                        className="border-8 border-stone-400 rounded-xl h-[400px] w-[500px] md:ml-8 hover:scale-110 transition-all duration-700 ease-in-out"
                        src="/frontPage/lobby.jpg"
                        alt="lobbyImage" />
                </div>
                <div className="flex flex-wrap gap-8 justify-center mt-[8%]">
                    {
                        cardAbout.map((card, index) => (
                            <CardInfo key={index} className="bg-red-300 border-white border-1 md:pb-7 w-[85%] min-h-48 md:h-auto hover:bg-red-100 hover:pt-5 hover:pb-20 transition-all duration-500 ease-in-out">
                                <h4 className='font-bold '>{card.title}</h4>
                                <p>{card.description}</p>
                            </CardInfo>
                        ))
                    }
                </div>
            </Section>
        </div>
    )
}

const defaultContent = `Hi there! I'm Miguel Fuentes, a student at Butte College pursuing an Associate in Arts for Transfer.
Originally, I began my academic journey with interests in both Computer Science and Kinesiology.
After exploring computer classes this semester, my passion for Kinesiology has grown significantly.
My end goal is to work as an athletic trainer, blending my passion for fitness and helping others.
My hobbies include working out, hiking, and biking, which align perfectly with my career aspirations.
In 2025, I plan to transfer to Chico State to further my education.
My ultimate goal is to earn a Bachelor's in Exercise Physiology followed by enrolling in a Master's Program in Athletic Training.
`;

export default function PageContent({ content = defaultContent }) {
  return <main className="bg-gray-100 rounded-md p-6">{content}</main>;
}

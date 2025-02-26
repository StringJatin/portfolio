import Image from 'next/image'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <section className="py-16 flex flex-col items-center">
      <div className="profile-image-container mb-8">
        <Image
          src="https://cdiimmwtmgxcbcjzajwz.supabase.co/storage/v1/object/public/findmycollege//Profile.jpeg"
          alt="Jatin Chouhan"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6 text-center">Hey, I&apos;m Jatin Chouhan</h1>

      <div className="max-w-2xl text-center mb-8">
        <p className="mb-4">
          I am a dedicated and skilled Software Engineer with a strong background in developing scalable and user-friendly web applications. Proficient in JavaScript, TypeScript, React.js, AngularJS, and Node.js, I have contributed to high-impact projects at ShipThis, where I enhanced frontend features and migrated component libraries for improved performance. My experience spans across various domains, including SaaS solutions and AI-driven tools, where I have focused on API development, UI enhancements, and backend optimizations. I am passionate about leveraging technology to create efficient and engaging applications, and I continuously strive to learn new tools and frameworks to stay at the forefront of software development.
        </p>
        <p>
          I&apos;m passionate about leveraging technology to create efficient, user-friendly applications,
          and continuously learning new tools and frameworks to stay at the forefront of web
          development.
        </p>
      </div>

      <div className="mt-4">
        <p className="text-center mb-4">Connect with me:</p>
        <SocialLinks />
      </div>
    </section>
  )
}
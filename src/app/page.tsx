"use client"
import Image from "next/image";
import pic from "../../public/idea.png"
import { FiMail, FiPhone } from "react-icons/fi";
import Digne from "../../public/digne.jpg"
import Peggy from "../../public/peggy.jpg"
import Sam from "../../public/samuel.png"
import flavia from "../../public/fla.jpg"
import kingley from "../../public/kingley.png"
import { useState } from "react";
export default function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [status, setStatus] = useState<string | null>(null); // Status message

  // Validate email format
  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    // Validation checks
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!subject.trim()) newErrors.subject = 'Subject is required';
    if (!message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    // If no errors, proceed with API call
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      setStatus(null);

      try {
        const response = await fetch('/api/mail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ from: email, subject, text: message ,name}),
        });

        if (response.ok) {

          setStatus('Email sent successfully!');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setTimeout(()=>{
            setStatus('');
          },6000)
        } else {
          const errorData = await response.json();
          setStatus(`Failed to send email: ${errorData.error || 'Unknown error'}`);
        }
      } catch (error) {
        setStatus('An error occurred. Please try again later.');
        console.log(error)
      } finally {
        setIsLoading(false);
        
      }
    }
  };

  const ourTeam = [
    {
      id: 1,
      name: 'DUSENGE Peggy',
      href: 'https://www.linkedin.com/in/peggy-dusenge-34a61a299/',
      position: 'Group representative',
      imageSrc: Peggy,
      imageAlt: `Peggy's photo`,
    },
    {
      id: 2,
      name: 'Samuel Chima',
      href: 'https://www.linkedin.com/in/samuelchima/',
      position: 'Sub-representative',
      imageSrc: Sam,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 3,
      name: 'Digne Esther',
      href: 'https://www.instagram.com/digneestrellah/',
      position: 'Researcher',
      imageSrc: Digne,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 4,
      name: 'Kingley Diakite',
      href: 'https://www.instagram.com/kinglydiak/',
      position: 'Executive Content creator',
      imageSrc: kingley,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Flavienne Ihirwe',
      href: 'https://www.instagram.com/fla_via_04/',
      position: 'Researcher',
      imageSrc: flavia,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },

  ]
  return (
    <div className='w-full min-h-[100vh] bg-slate-50 text-gray-950 '>

      <div className="flex h-[100vh] px-10 bg-[url('../../public/freepik__expand__96022.png')] bg-cover ">
        <div className="w-[50%] h-[100%] flex flex-col justify-center text-end ">
          <p className="text-[95px] font-bold text-[#001446]">Idea factory</p>
          <p className="text-[#D55571] text-[25px] pl-[120px]">Young minds empowering changes</p>
          <p className=" text-[17px] text-gray-950 self-start pt-4 pl-[40px]">Our <span className="font-extrabold">Mission</span> is to empower young people by fostering growth and success through initiatives that spark creativity, inspire innovation, and help reduce unemployment. We are dedicated to equipping young minds with the skills, tools, and opportunities they need to prosper and build a secure future. Join us in creating a world where every young person has the chance to thrive and make a meaningful impact.</p>
        </div>
        <div className="w-[50%] h-[100%]  overflow-hidden object-cover flex align-middle justify-center pt-[50px]">
          <Image alt="logo" src={pic} width={600} height={400} />
        </div>



      </div>
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Our problem statement and solution
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-1">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    OUR PROBLEM
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    The latest 2024 statistics from NISR indicate that unemployment among youths stands at 16.8%.
                    This high proportion is indicative of the continued challenges faced by youths in the country upon
                    transition into the job market. It is brought about principally by a lack of available jobs and the
                    unavailability of skills that match the few available ones. The greatest portion of the youth is
                    either underemployed or without the right skills required by current job markets, a situation that
                    reflects the dire need for reforms in education and skill development to bridge this gap. The issue
                    now forms a core component of the agenda driving the intervention of policymakers into action
                    because making sure youth employment improves is key to socio-economic development.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    OUR SOLUTION
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    We aim to reduce youth unemployment by creating opportunities within Rwanda&apos;s tourism sector. Through partnerships with local artisans, guides, and businesses, we will open up jobs in cultural tourism, digital content creation, and sales of authentic Rwandan crafts and souvenirs. Our platform will connect young Rwandans with visitors and buyers interested in Rwandan art and personalized travel experiences, allowing local talents to showcase and sell their work. Additionally, by supporting youth entrepreneurship in tourism, *Xplore Rwanda* will empower young people to turn their cultural knowledge and creativity into sustainable businesses, helping to bridge the gap between skills and job market demands.
                  </p>
                </div>
                <div className="relative min-h-[6rem] w-full grow">

                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <h2 className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Our team</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8 mt-16">
          {ourTeam.map((member) => (
            <a key={member.id} href={member.href} target="_blank" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full h-[300px] overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  alt={member.imageAlt}
                  src={member.imageSrc}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center  group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 ">{member.name}</h3>
              <p className="mt-1 text-sm text-gray-700">{member.position}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="min-h-[100vh] pt-[100px] px-10 bg-[url('../../public/freepik__expand__96022.png')] bg-cover ">
        <div className="my-8" id="Contact">
          <div className="text-center mx-auto mb-8 max-w-[510px]">
            <h2 className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl ">
              Reach out to US
            </h2>
          </div>
          <div
            className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto my-5 max-w-4x bg-transparent backdrop-blur-sm w-[70%] shadow-md rounded-md text-[#333] font-[sans-serif]">
            <div>
              <h1 className="text-3xl text-[#001446] font-extrabold">CONTACT US</h1>
              <p className="text-sm text-[#D55571] mt-3">Have any enquiries about us or what we do? Reach out to us so that we can talk</p>
              <div className="mt-12">
                <h2 className="text-lg font-extrabold">Email</h2>
                <ul className="mt-3">
                  <li className="flex items-center mb-3">
                    <div className="bg-[#ffffffcf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <FiMail />
                    </div>
                    <div className="text-[#000000] text-sm ml-3">
                      <small className="block">Mail</small>
                      <strong>ideafactory@gmail.com</strong>
                    </div>
                  </li>
                  <li className="flex items-center mb-3">
                    <div className="bg-[#ffffffcf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <FiPhone />
                    </div>

                    <small className="block">Phone</small>
                    <strong >+250 778 244 211 </strong>

                  </li>
                </ul>
              </div>

            </div>
            <form className="contact-form ml-auto space-y-4 w-[100%]" onSubmit={handleSubmit} >
              <input
                type="text"
                placeholder="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full min-w-full rounded-md py-2.5 px-4 border text-sm outline-[#000000] ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-md py-2.5 px-4 border text-sm outline-[#000000] ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input
                type="text"
                placeholder="Subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`w-full rounded-md py-2.5 px-4 border text-sm outline-[#000000] ${errors.subject ? 'border-red-500 w-full' : ''}`}
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

              <textarea
                placeholder="Message"
                rows={6}
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full rounded-md px-4 border text-sm pt-2.5 outline-[#000000] ${errors.message ? 'border-red-500' : ''}`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className="text-white bg-[rgb(11,23,53)] hover:bg-white hover:text-black font-semibold rounded-md text-sm px-4 py-2.5 w-full"
              >
                {isLoading ? 'Sending...' : 'SEND'}
              </button>

              {/* Status message */}
              {status && <p className={`text-sm ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}


            </form>
          </div>

        </div>


      </div>



    </div>
  );
}

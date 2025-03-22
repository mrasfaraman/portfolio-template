import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Image from "next/image";
import profilePic from "../public/dev-ed-wave.png"; // Replace with your image later
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger menu

// Import icons from react-icons (Simple Icons set for tech logos)
import {
  SiAmazonaws as AwsIcon,
  SiMicrosoftazure as AzureIcon,
  SiGooglecloud as GcpIcon,
  SiApachespark as SparkIcon,
  SiApachekafka as KafkaIcon,
  SiApachehadoop as HadoopIcon,
  SiApacheairflow as AirflowIcon,
  SiSnowflake as SnowflakeIcon,
  SiTensorflow as TensorflowIcon,
  SiPytorch as PytorchIcon,
  SiTableau as TableauIcon,
  SiPowerbi as PowerbiIcon,
  SiDocker as DockerIcon,
  SiKubernetes as KubernetesIcon,
  SiDatabricks as DatabricksIcon,
} from "react-icons/si";

// Use a generic icon for tools not available in Simple Icons (e.g., Talend)
import { FaTools as GenericToolIcon } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  // Define tools with their names and icons
  const tools = [
    { name: "AWS", icon: <AwsIcon className="w-12 h-12" /> },
    { name: "Azure", icon: <AzureIcon className="w-12 h-12" /> },
    { name: "GCP", icon: <GcpIcon className="w-12 h-12" /> },
    { name: "Apache Spark", icon: <SparkIcon className="w-12 h-12" /> },
    { name: "Kafka", icon: <KafkaIcon className="w-12 h-12" /> },
    { name: "Hadoop", icon: <HadoopIcon className="w-12 h-12" /> },
    { name: "Talend", icon: <GenericToolIcon className="w-12 h-12" /> },
    { name: "Apache Airflow", icon: <AirflowIcon className="w-12 h-12" /> },
    { name: "Databricks", icon: <DatabricksIcon className="w-12 h-12" /> },
    { name: "Snowflake", icon: <SnowflakeIcon className="w-12 h-12" /> },
    { name: "TensorFlow", icon: <TensorflowIcon className="w-12 h-12" /> },
    { name: "PyTorch", icon: <PytorchIcon className="w-12 h-12" /> },
    { name: "Tableau", icon: <TableauIcon className="w-12 h-12" /> },
    { name: "Power BI", icon: <PowerbiIcon className="w-12 h-12" /> },
    { name: "Docker", icon: <DockerIcon className="w-12 h-12" /> },
    { name: "Kubernetes", icon: <KubernetesIcon className="w-12 h-12" /> },
  ];

  // Define sections for the navbar
  const sections = [
    { name: "Home", id: "home" },
    { name: "Summary", id: "summary" },
    { name: "Services", id: "services" },
    { name: "Tools & Technologies", id: "tools" },
    { name: "Experience", id: "experience" },
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjusted offset for navbar height

      let newActiveSection = "home"; // Default to "home"
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 && // Adjusted for better detection
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            newActiveSection = section.id;
            break;
          }
        }
      }

      // Update active section only if it has changed
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, sections]);

  // Handle click to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjusted for navbar height
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsMenuOpen(false); // Close mobile menu on click
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Hazzy M | Data Solution Architect</title>
        <meta name="description" content="Hazzy M - Big Data Engineer & Cloud Specialist Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 dark:bg-gray-800 shadow-md py-4 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex justify-between items-center dark:text-white">
        <a href="#home" onClick={() => scrollToSection("home")}>
          <h1 className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent drop-shadow-md hover:drop-shadow-lg transition-all duration-300">
            Hazzy M
          </h1>
        </a>

        {/* Desktop/Tablet Navbar Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center space-x-4 lg:space-x-6">
            {sections.map((section) => (
              <li key={section.id} className="relative">
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={`text-sm lg:text-lg cursor-pointer hover:text-teal-600 transition-colors ${
                    activeSection === section.id ? "text-teal-600" : ""
                  }`}
                >
                  {section.name}
                </a>
                {activeSection === section.id && (
                  <div className="absolute bottom-[-4px] left-0 right-0 h-1 bg-teal-600 rounded-full" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side (Dark Mode Toggle + Resume) */}
        <div className="flex items-center">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-xl sm:text-2xl mr-3 sm:mr-4"
          />
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base"
            href="#"
          >
            Resume
          </a>
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden ml-3">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Slider) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-50 dark:bg-gray-800 shadow-md py-4 px-4">
            <ul className="flex flex-col space-y-4">
              {sections.map((section) => (
                <li key={section.id} className="relative">
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section.id);
                    }}
                    className={`text-lg cursor-pointer hover:text-teal-600 transition-colors ${
                      activeSection === section.id ? "text-teal-600" : ""
                    }`}
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <main className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 pt-20 sm:pt-24" id="home">
        <section className="min-h-screen">
          <div className="text-center p-6 sm:p-10">
          <div className="mx-auto bg-gradient-to-b mb-5 from-teal-500 rounded-full w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 relative overflow-hidden mt-10 sm:mt-20">
              <Image src={profilePic} layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl py-2 text-teal-600 font-medium dark:text-teal-400">
              Hazzy M
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl py-2 dark:text-white">
              Senior Data Solution Architect
            </h3>
            <p className="text-sm sm:text-md md:text-xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto">
              I design, develop, and optimize scalable data solutions across cloud platforms using cutting-edge tech like Spark, Kafka, Databricks, and more.
            </p>
            <div className="text-4xl sm:text-5xl flex justify-center gap-8 sm:gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/hazzy-m-dummy" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="hover:text-teal-600 transition-colors cursor-pointer" />
              </a>
              <a href="https://github.com/hazzy-m-dummy" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="hover:text-teal-600 transition-colors cursor-pointer" />
              </a>
              <a href="mailto:hazzymcoder@gmail.com">
                <AiOutlineMail className="hover:text-teal-600 transition-colors cursor-pointer" />
              </a>
            </div>
            
          </div>
        </section>

        {/* SUMMARY SECTION */}
        <section id="summary" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 dark:text-white">Summary</h3>
          <p className="text-sm sm:text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
            Results-driven Senior Data Solution Architect with over 11 years of experience in designing, developing, and optimizing scalable data solutions. Expertise in ETL pipelines, big data processing, and cloud-based architectures, utilizing Talend, Apache NiFi, Apache Airflow, and Informatica. Specialized in data warehousing methodologies (Star Schema, Snowflake Schema, Data Vault) and cloud platforms (AWS, Azure, GCP). Proficient in big data technologies such as Hadoop, Spark, Kafka, and HDFS, with a strong focus on real-time data streaming and distributed systems architecture.
          </p>
        </section>

        {/* SERVICES SECTION */}
        <section id="services">
          <div>
            <h3 className="text-2xl sm:text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className="text-sm sm:text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
              With over 11 years in the industry, I specialize in:
            </p>
          </div>
          <div className="lg:flex gap-6 sm:gap-10">
            <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-6 sm:my-10 bg-white dark:bg-gray-800 flex-1 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold pt-6 sm:pt-8 pb-2 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black">Data Architecture & Engineering</h3>
              <p className="py-2 text-sm sm:text-base text-gray-700 dark:text-gray-200 group-hover:text-white dark:group-hover:text-black">Enterprise-grade architectures across AWS, Azure, and GCP.</p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 py-1 group-hover:text-white dark:group-hover:text-black">ETL / ELT Development</p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 py-1 group-hover:text-white dark:group-hover:text-black">Data Lake & Lakehouse Solutions</p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 py-1 group-hover:text-white dark:group-hover:text-black">Cloud Migrations</p>
            </div>
            <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-6 sm:my-10 bg-white dark:bg-gray-800 flex-1 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold pt-6 sm:pt-8 pb-2 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black">Big Data & Streaming</h3>
              <p className="py-2 text-sm sm:text-base text-gray-700 dark:text-gray-200 group-hover:text-white dark:group-hover:text-black">Real-time data streaming, big data processing, and batch pipelines.</p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 py-1 group-hover:text-white dark:group-hover:text-black">Apache Kafka, Spark, Flink</p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 py-1 group-hover:text-white dark:group-hover:text-black">Hadoop Ecosystem</p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 py-1 group-hover:text-white dark:group-hover:text-black">Data Warehousing</p>
            </div>
            <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-6 sm:my-10 bg-white dark:bg-gray-800 flex-1 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold pt-6 sm:pt-8 pb-2 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black">ML & Visualization</h3>
              <p className="py-2 text-sm sm:text-base text-gray-700 dark:text-gray-200 group-hover:text-white dark:group-hover:text-black">Seamless ML integration and business intelligence solutions.</p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 py-1 group-hover:text-white dark:group-hover:text-black">TensorFlow, PyTorch, Sklearn</p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 py-1 group-hover:text-white dark:group-hover:text-black">Tableau, Power BI, QuickSight</p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 py-1 group-hover:text-white dark:group-hover:text-black">Databricks</p>
            </div>
          </div>
        </section>

        {/* TOOLS & TECHNOLOGIES SECTION */}
        <section id="tools" className="py-10">
          <div>
            <h3 className="text-2xl sm:text-3xl py-1 dark:text-white">Tools & Technologies</h3>
            <p className="text-sm sm:text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
              Proficient in a wide range of tools and technologies for data engineering, machine learning, and cloud solutions:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center shadow-lg p-4 sm:p-6 rounded-xl bg-white dark:bg-gray-800 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group hover:scale-105"
              >
                <div className="mb-4 text-gray-800 dark:text-gray-200 group-hover:text-white dark:group-hover:text-black">
                  {tool.icon}
                </div>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 group-hover:text-white dark:group-hover:text-black font-medium">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 dark:text-white">Experience</h3>
          <div className="space-y-6 sm:space-y-8">
            <div className="border-l-4 border-teal-500 pl-4 sm:pl-6 pb-6">
              <h4 className="text-lg sm:text-xl font-medium dark:text-white">Data Solution Architect - ApTask</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">April 2021 - Present</p>
              <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-200">
                <li>Designed and implemented enterprise-level data architectures across cloud platforms</li>
                <li>Developed ETL pipelines using Talend, Apache Airflow, and Informatica</li>
                <li>Led migration of on-premises data warehouses to AWS, Azure, and GCP</li>
                <li>Integrated machine learning models into operational workflows</li>
                <li>Established real-time data streaming solutions using Kafka and AWS Kinesis</li>
              </ul>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 sm:pl-6 pb-6">
              <h4 className="text-lg sm:text-xl font-medium dark:text-white">Senior Data Engineer - Petra Power</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">July 2017 - March 2021</p>
              <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-200">
                <li>Developed large-scale data pipelines using Hadoop, Spark, and Kafka</li>
                <li>Designed distributed storage solutions using HDFS and Amazon S3</li>
                <li>Automated ETL workflows with Apache NiFi and Airflow</li>
                <li>Collaborated with data science teams to deploy ML models on Databricks</li>
                <li>Implemented performance tuning for Apache Spark</li>
              </ul>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 sm:pl-6 pb-6">
              <h4 className="text-lg sm:text-xl font-medium dark:text-white">ETL & Data Warehouse Engineer - ProCogia</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">February 2014 - June 2017</p>
              <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-200">
                <li>Designed and maintained ETL pipelines using Talend and SSIS</li>
                <li>Architected data warehouse solutions using dimensional modeling</li>
                <li>Developed real-time data integration for healthcare analytics</li>
                <li>Created interactive dashboards using Tableau and Power BI</li>
                <li>Spearheaded cloud migration initiatives to AWS and GCP</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 dark:text-white">Certifications</h3>
          <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-200">
            <li>AWS Certified Data Analytics - Specialty</li>
            <li>Google Professional Data Engineer</li>
          </ul>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 dark:text-white">Education</h3>
          <div className="border-l-4 border-teal-500 pl-4 sm:pl-6">
            <h4 className="text-lg sm:text-xl font-medium dark:text-white">Bachelor of Science, Computer Science</h4>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">New Jersey College of Engineering & Technology</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 py-4 sm:py-6 text-center">
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          © 2025 Hazzy M. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
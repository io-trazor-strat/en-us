import React, { useEffect, useState } from 'react';
import { 
  Shield, 
  Wallet, 
  Lock, 
  Download, 
  HelpCircle, 
  ChevronDown, 
  Menu, 
  X, 
  Github,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id') || '';
        
        if (sectionTop < 200 && sectionTop >= -section.offsetHeight + 200) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-purple-500 mr-2 animate-pulse" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Trėzor.io/start
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <NavLink active={activeSection === 'home'} onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink active={activeSection === 'about'} onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink active={activeSection === 'features'} onClick={() => scrollToSection('features')}>Features</NavLink>
            <NavLink active={activeSection === 'install'} onClick={() => scrollToSection('install')}>Install</NavLink>
            <NavLink active={activeSection === 'troubleshooting'} onClick={() => scrollToSection('troubleshooting')}>Help</NavLink>
            <NavLink active={activeSection === 'faq'} onClick={() => scrollToSection('faq')}>FAQ</NavLink>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20">
              Get Started
            </button>
            <button className="hidden md:block px-6 py-2 border border-purple-500 rounded-full font-medium hover:bg-purple-900/30 transform hover:scale-105 transition-all duration-300">
              Login
            </button>
            <button className="md:hidden text-white" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4 bg-black/90 border-t border-purple-500/30">
            <MobileNavLink onClick={() => scrollToSection('home')}>Home</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('about')}>About</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('features')}>Features</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('install')}>Install</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('troubleshooting')}>Help</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('faq')}>FAQ</MobileNavLink>
            <div className="flex space-x-2 pt-2">
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium">
                Get Started
              </button>
              <button className="flex-1 px-4 py-2 border border-purple-500 rounded-full font-medium">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="cyberpunk-grid"></div>
          </div>
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="glitch-wrapper mb-6">
                <h1 className="glitch text-5xl md:text-7xl font-bold" data-text="Trėzor.io/start®">Trėzor.io/start®</h1>
              </div>
              <h2 className="text-2xl md:text-3xl mb-8 text-purple-300">Introducing the New Trėzor.io/start App</h2>
              <p className="text-lg md:text-xl mb-12 text-gray-300">Your Secure Gateway to Hassle-Free Crypto Management</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 group">
                  <span className="group-hover:animate-pulse">Get Started Now</span>
                </button>
                <button className="px-8 py-4 border-2 border-purple-500 rounded-full font-medium text-lg hover:bg-purple-900/30 transform hover:scale-105 transition-all duration-300 group">
                  <span className="group-hover:animate-pulse">Learn More</span>
                </button>
              </div>
              
              <div className="floating-cube"></div>
              <div className="floating-cube delay-2"></div>
              <div className="floating-cube delay-4"></div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-purple-400" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 glowing-text">What Is Trėzor.io/start?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="neon-box p-8 mb-12">
                <p className="text-lg mb-6">
                  Trėzor.io/start is a revolutionary platform designed to simplify the way you manage your cryptocurrency assets. As the digital currency landscape continues to evolve, Trėzor.io/start stands at the forefront of innovation, providing users with a secure, intuitive, and comprehensive solution for all their crypto needs.
                </p>
                <p className="text-lg mb-6">
                  Founded on the principles of security, accessibility, and user empowerment, Trėzor.io/start combines cutting-edge blockchain technology with an intuitive user interface to create a seamless experience for both novice and experienced crypto enthusiasts. Our platform serves as a bridge between the complex world of cryptocurrency and everyday users, making digital asset management accessible to everyone.
                </p>
                <p className="text-lg">
                  With Trėzor.io/start, you can securely store, send, receive, and manage multiple cryptocurrencies from a single dashboard. Our advanced security protocols ensure that your assets remain protected at all times, while our user-friendly interface makes navigation and transaction execution straightforward and hassle-free.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="hexagon-box p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Our Mission</h3>
                  <p className="text-gray-300">
                    At Trėzor.io/start, our mission is to democratize access to cryptocurrency management tools, ensuring that everyone, regardless of their technical expertise, can participate in the digital economy securely and confidently. We believe in a future where digital assets play a central role in the global financial system, and we're committed to building the infrastructure that makes this vision a reality.
                  </p>
                </div>
                
                <div className="hexagon-box p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Our Vision</h3>
                  <p className="text-gray-300">
                    We envision a world where managing digital assets is as simple and secure as traditional banking, but with the added benefits of decentralization, transparency, and user control. Trėzor.io/start is not just a product; it's a movement towards a more inclusive, secure, and user-centric financial ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 glowing-text">Key Features of Trėzor.io/start</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Shield className="h-12 w-12 text-purple-400" />}
                title="Advanced Security"
                description="Trėzor.io/start employs military-grade encryption, multi-factor authentication, and secure element technology to ensure your assets remain protected against unauthorized access and cyber threats. Our security infrastructure undergoes regular audits and updates to stay ahead of emerging vulnerabilities."
              />
              
              <FeatureCard 
                icon={<Wallet className="h-12 w-12 text-purple-400" />}
                title="Multi-Currency Support"
                description="Manage a diverse portfolio of cryptocurrencies from a single interface. Trėzor.io/start supports Bitcoin, Ethereum, and hundreds of other cryptocurrencies and tokens, allowing you to monitor and manage your entire digital asset portfolio in one place."
              />
              
              <FeatureCard 
                icon={<Lock className="h-12 w-12 text-purple-400" />}
                title="Self-Custody Solution"
                description="Maintain complete control over your private keys with our self-custody solution. Unlike centralized exchanges, Trėzor.io/start ensures that you, and only you, have access to your funds, eliminating the risk of third-party breaches or mismanagement."
              />
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="triangle-box p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Intuitive User Interface</h3>
                <p className="text-gray-300 mb-4">
                  Trėzor.io/start features a clean, intuitive interface designed to make cryptocurrency management accessible to users of all experience levels. Our dashboard provides at-a-glance insights into your portfolio performance, transaction history, and market trends.
                </p>
                <ul className="fancy-list">
                  <li>Real-time portfolio tracking</li>
                  <li>Customizable dashboard widgets</li>
                  <li>Dark and light mode options</li>
                  <li>Responsive design for all devices</li>
                </ul>
              </div>
              
              <div className="triangle-box p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Seamless Transactions</h3>
                <p className="text-gray-300 mb-4">
                  Execute transactions with ease using our streamlined process. Whether you're sending funds to another wallet, exchanging between currencies, or interacting with decentralized applications, Trėzor.io/start ensures a smooth and secure experience.
                </p>
                <ul className="fancy-list">
                  <li>One-click transactions</li>
                  <li>QR code scanning for addresses</li>
                  <li>Customizable transaction fees</li>
                  <li>Batch transaction support</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 rounded-box p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">Integration Ecosystem</h3>
              <p className="text-gray-300 mb-6 text-center">
                Trėzor.io/start seamlessly integrates with a wide range of blockchain networks, decentralized applications, and financial services, creating a comprehensive ecosystem for all your cryptocurrency needs.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-purple-900/30 p-4 rounded-lg text-center">
                  <p className="font-medium">DeFi Protocols</p>
                </div>
                <div className="bg-purple-900/30 p-4 rounded-lg text-center">
                  <p className="font-medium">NFT Marketplaces</p>
                </div>
                <div className="bg-purple-900/30 p-4 rounded-lg text-center">
                  <p className="font-medium">Tax Reporting Tools</p>
                </div>
                <div className="bg-purple-900/30 p-4 rounded-lg text-center">
                  <p className="font-medium">Exchange Platforms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="install" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 glowing-text">How to Install Trėzor.io/start</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="neon-box p-8 mb-12">
                <p className="text-lg mb-6">
                  Getting started with Trėzor.io/start is a straightforward process designed to get you up and running in minutes. Our installation process prioritizes both security and user experience, ensuring that you can begin managing your digital assets with confidence right away.
                </p>
                <p className="text-lg">
                  Follow the step-by-step guide below to install Trėzor.io/start on your preferred device. Whether you're using a desktop computer, smartphone, or hardware wallet, our platform offers a seamless installation experience across all supported devices.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="rounded-box p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Desktop Installation</h3>
                  <ol className="numbered-list">
                    <li>Visit the official Trėzor.io/start website and navigate to the Downloads section.</li>
                    <li>Select the appropriate version for your operating system (Windows, macOS, or Linux).</li>
                    <li>Download the installation package and verify the checksum to ensure file integrity.</li>
                    <li>Run the installer and follow the on-screen instructions to complete the installation.</li>
                    <li>Launch Trėzor.io/start and create a new wallet or import an existing one.</li>
                  </ol>
                </div>
                
                <div className="rounded-box p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Mobile Installation</h3>
                  <ol className="numbered-list">
                    <li>Open the App Store (iOS) or Google Play Store (Android) on your mobile device.</li>
                    <li>Search for "Trėzor.io/start" in the store's search bar.</li>
                    <li>Tap on the official Trėzor.io/start app in the search results.</li>
                    <li>Tap "Install" or "Get" to download and install the app on your device.</li>
                    <li>Once installed, open the app and follow the setup wizard to create or import a wallet.</li>
                  </ol>
                </div>
              </div>
              
              <div className="hexagon-box p-8">
                <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">Hardware Wallet Integration</h3>
                <p className="text-gray-300 mb-6">
                  For enhanced security, Trėzor.io/start seamlessly integrates with popular hardware wallets, providing an additional layer of protection for your digital assets. Follow these steps to connect your hardware wallet:
                </p>
                <ol className="numbered-list">
                  <li>Connect your hardware wallet to your computer using the provided USB cable.</li>
                  <li>Unlock your hardware wallet by entering your PIN on the device.</li>
                  <li>Open the Trėzor.io/start application on your computer.</li>
                  <li>Navigate to the "Connect Hardware Wallet" option in the settings menu.</li>
                  <li>Select your hardware wallet model from the list of supported devices.</li>
                  <li>Follow the on-screen instructions to complete the pairing process.</li>
                  <li>Once connected, you can manage your hardware wallet-secured assets directly through the Trėzor.io/start interface.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section id="troubleshooting" className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 glowing-text">Troubleshooting Common Trėzor.io/start Issues</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="neon-box p-8 mb-12">
                <p className="text-lg mb-6">
                  While Trėzor.io/start is designed to provide a seamless user experience, you may occasionally encounter issues that require troubleshooting. Our comprehensive support resources are available to help you resolve any problems quickly and efficiently.
                </p>
                <p className="text-lg">
                  Below, we've compiled solutions to the most common issues reported by Trėzor.io/start users. If you don't find a solution to your specific problem, please don't hesitate to contact our dedicated support team for personalized assistance.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TroubleshootingCard 
                  title="Connection Issues"
                  problem="Unable to connect to the Trėzor.io/start network"
                  solution="Check your internet connection, ensure your firewall isn't blocking the application, and verify that your network settings allow outbound connections. You can also try restarting the application or your device."
                />
                
                <TroubleshootingCard 
                  title="Synchronization Problems"
                  problem="Wallet not synchronizing with the blockchain"
                  solution="Ensure you're running the latest version of Trėzor.io/start, check your internet connection, and try manually refreshing the synchronization process through the settings menu. In some cases, a full rescan may be necessary."
                />
                
                <TroubleshootingCard 
                  title="Transaction Delays"
                  problem="Transactions pending for an extended period"
                  solution="During periods of high network congestion, transactions may take longer to confirm. You can try increasing the transaction fee to prioritize your transaction or use the 'Replace-By-Fee' feature if available for your cryptocurrency."
                />
                
                <TroubleshootingCard 
                  title="Hardware Wallet Recognition"
                  problem="Hardware wallet not recognized by Trėzor.io/start"
                  solution="Ensure your hardware wallet is properly connected, unlocked, and running the latest firmware. Try using a different USB cable or port, and make sure no other applications are currently accessing the hardware wallet."
                />
              </div>
              
              <div className="mt-12 triangle-box p-8">
                <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">Security Troubleshooting</h3>
                <p className="text-gray-300 mb-6">
                  Security is our top priority at Trėzor.io/start. If you encounter any security-related issues, please follow these guidelines to protect your assets and account:
                </p>
                <ul className="fancy-list">
                  <li><strong>Forgotten Password:</strong> Use your backup recovery phrase to restore access to your wallet. Never share this phrase with anyone, including Trėzor.io/start support staff.</li>
                  <li><strong>Suspicious Activity:</strong> If you notice unauthorized transactions or login attempts, immediately transfer your funds to a secure wallet and contact our support team.</li>
                  <li><strong>Phishing Attempts:</strong> Always verify you're using the official Trėzor.io/start website or application. We will never ask for your recovery phrase or private keys via email, chat, or phone.</li>
                  <li><strong>Two-Factor Authentication Issues:</strong> If you're having trouble with 2FA, use your backup codes to regain access. If you've lost these codes, contact support with proof of identity for assistance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 glowing-text">Why Trėzor.io/start Prioritizes Security</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="neon-box p-8 mb-12">
                <p className="text-lg mb-6">
                  In the world of cryptocurrency, security isn't just a feature—it's the foundation upon which everything else is built. At Trėzor.io/start, we've made security our highest priority, implementing multiple layers of protection to safeguard your digital assets against all potential threats.
                </p>
                <p className="text-lg">
                  Our security philosophy is based on the principle of "defense in depth," combining cutting-edge technology, rigorous protocols, and user education to create a comprehensive security ecosystem that protects your assets at every level.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="rounded-box p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">End-to-End Encryption</h3>
                  <p className="text-gray-300">
                    All data transmitted between your device and our servers is protected with state-of-the-art encryption protocols, ensuring that sensitive information remains private and secure. Our encryption standards exceed industry requirements, providing an additional layer of protection against interception and data breaches.
                  </p>
                </div>
                
                <div className="rounded-box p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Multi-Signature Support</h3>
                  <p className="text-gray-300">
                    Trėzor.io/start offers multi-signature functionality, requiring multiple authorized parties to approve transactions before they're executed. This feature is particularly valuable for business accounts, shared wallets, and high-value transactions, adding an extra layer of security and accountability.
                  </p>
                </div>
                
                <div className="rounded-box p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Cold Storage</h3>
                  <p className="text-gray-300">
                    For maximum security, Trėzor.io/start supports cold storage solutions, keeping the majority of your assets offline and inaccessible to potential attackers. Our cold storage implementation follows industry best practices, with regular security audits and penetration testing to identify and address potential vulnerabilities.
                  </p>
                </div>
              </div>
              
              <div className="hexagon-box p-8">
                <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">Security Best Practices</h3>
                <p className="text-gray-300 mb-6">
                  While Trėzor.io/start provides robust security features, we also encourage users to follow these best practices to further enhance the security of their digital assets:
                </p>
                <ul className="fancy-list">
                  <li><strong>Enable Two-Factor Authentication:</strong> Add an extra layer of security to your account by enabling 2FA, preferably using a hardware security key or authenticator app.</li>
                  <li><strong>Use a Strong, Unique Password:</strong> Create a complex password that you don't use for any other service, and consider using a password manager to generate and store secure passwords.</li>
                  <li><strong>Regularly Update Your Software:</strong> Keep your Trėzor.io/start application, operating system, and antivirus software up to date to protect against known vulnerabilities.</li>
                  <li><strong>Be Wary of Phishing Attempts:</strong> Always verify the URL before entering your credentials, and be suspicious of unsolicited emails or messages asking for your account information.</li>
                  <li><strong>Create Regular Backups:</strong> Backup your wallet regularly and store the backup in a secure location, preferably offline and in multiple physical locations.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 glowing-text">FAQs About Trėzor.io/start</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <FaqItem 
                question="What cryptocurrencies does Trėzor.io/start support?"
                answer="Trėzor.io/start supports a wide range of cryptocurrencies, including Bitcoin, Ethereum, Litecoin, Ripple, and hundreds of ERC-20 tokens. We regularly add support for new cryptocurrencies based on market trends and user demand. You can view the complete list of supported cryptocurrencies in the app or on our website."
              />
              
              <FaqItem 
                question="Is Trėzor.io/start available on all platforms?"
                answer="Yes, Trėzor.io/start is available on Windows, macOS, Linux, iOS, and Android. Our cross-platform compatibility ensures that you can access and manage your digital assets from any device, with a consistent user experience across all platforms."
              />
              
              <FaqItem 
                question="How does Trėzor.io/start secure my private keys?"
                answer="Trėzor.io/start employs a non-custodial model, meaning your private keys are stored locally on your device and encrypted with your password. They are never transmitted to our servers or stored in the cloud. For additional security, you can opt to use a hardware wallet in conjunction with Trėzor.io/start."
              />
              
              <FaqItem 
                question="What happens if I lose my recovery phrase?"
                answer="If you lose your recovery phrase, you will permanently lose access to your wallet and funds if you also forget your password or lose your device. There is no way to recover your wallet without the recovery phrase, as Trėzor.io/start does not store a copy of your private keys or recovery phrase. This is why it's crucial to store your recovery phrase in a secure location."
              />
              
              <FaqItem 
                question="Are there any fees for using Trėzor.io/start?"
                answer="Trėzor.io/start offers both free and premium tiers. The free tier provides all essential wallet functionality, while the premium tier offers advanced features such as portfolio analytics, priority support, and enhanced security options. Network transaction fees are separate and determined by the respective blockchain networks."
              />
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section id="conclusion" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 glowing-text">Conclusion</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="neon-box p-8">
                <p className="text-lg mb-6">
                  Trėzor.io/start represents the next evolution in cryptocurrency management, combining robust security, intuitive design, and comprehensive functionality to create a platform that meets the needs of both novice and experienced users. As the cryptocurrency ecosystem continues to grow and evolve, Trėzor.io/start remains committed to providing the tools and resources you need to navigate this exciting landscape with confidence.
                </p>
                <p className="text-lg mb-6">
                  Our team of blockchain experts, security specialists, and user experience designers work tirelessly to ensure that Trėzor.io/start remains at the forefront of innovation, incorporating the latest advancements in technology while maintaining the highest standards of security and usability.
                </p>
                <p className="text-lg">
                  Whether you're taking your first steps into the world of cryptocurrency or managing a diverse portfolio of digital assets, Trėzor.io/start provides the foundation you need to succeed. Join our growing community of users who trust Trėzor.io/start to secure and manage their digital wealth, and experience the future of cryptocurrency management today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section id="disclaimer" className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 glowing-text">Disclaimer</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="triangle-box p-8">
                <p className="text-lg mb-6">
                  The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                </p>
                <p className="text-lg mb-6">
                  Cryptocurrency investments are subject to market risks. The value of cryptocurrencies can go up or down, and there can be a substantial risk that you lose money. Past performance is not indicative of future results. Before making any investment decisions, you should seek advice from an independent financial advisor.
                </p>
                <p className="text-lg">
                  Trėzor.io/start is not responsible for any losses incurred due to the use of our platform. Users are solely responsible for the security of their private keys and recovery phrases. Always exercise caution and follow security best practices when managing your digital assets.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-purple-500/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  Trėzor.io/start
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                Your Secure Gateway to Hassle-Free Crypto Management
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#install" className="text-gray-400 hover:text-purple-400 transition-colors">Installation</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-purple-400 transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">support@trezor.io</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
                <li className="text-gray-400">123 Blockchain Street, Crypto City, CC 12345</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Trėzor.io/start. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for navigation links
function NavLink({ children, active, onClick }: { children: React.ReactNode, active?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`font-medium transition-colors duration-300 ${
        active 
          ? 'text-purple-400 border-b-2 border-purple-500' 
          : 'text-gray-300 hover:text-purple-400'
      }`}
    >
      {children}
    </button>
  );
}

// Component for mobile navigation links
function MobileNavLink({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="w-full text-left py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
    >
      {children}
    </button>
  );
}

// Component for feature cards
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="feature-card p-6 rounded-lg bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-purple-300">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

// Component for troubleshooting cards
function TroubleshootingCard({ title, problem, solution }: { title: string, problem: string, solution: string }) {
  return (
    <div className="rounded-box p-6">
      <h3 className="text-2xl font-bold mb-3 text-purple-300">{title}</h3>
      <p className="font-medium text-gray-200 mb-2">Problem: {problem}</p>
      <p className="text-gray-300">Solution: {solution}</p>
    </div>
  );
}

// Component for FAQ items
function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4 rounded-box overflow-hidden">
      <button
        className="w-full p-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-purple-300">{question}</h3>
        <ChevronDown className={`h-5 w-5 text-purple-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 p-4 pt-0' : 'max-h-0'}`}>
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
}

export default App;
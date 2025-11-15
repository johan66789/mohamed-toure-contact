"use client"
import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Globe, Linkedin, Download, Calendar, CheckCircle } from 'lucide-react';

export default function MohamedToureProfile() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Mohamed TOURE
N:TOURE;Mohamed;;;
TITLE:Co-Founder & Managing Partner - TFCG
ORG:Twenty First Consulting Group
TEL;TYPE=CELL:+2250778366898  
EMAIL:toure@twentyfirst-consulting.com
URL:https://www.linkedin.com/in/mohamed-toure-001/
URL:https://www.twentyfirst-consulting.com
NOTE:Entrepreneur | Ex Deloitte, EY, KPMG | Choiseul 100 Africa Laureate
END:VCARD`;
    
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mohamed_TOURE.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const buttons = [
    {
      id: 'call',
      icon: Phone,
      label: 'Appeler maintenant',
      href: 'tel:+2250778366898', 
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: 'Message WhatsApp',
      href: 'https://wa.me/2250778366898', 
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Envoyer un mail',
      href: 'mailto:toure@twentyfirst-consulting.com',
      gradient: 'from-red-500 to-red-600'
    },
    {
      id: 'website',
      icon: Globe,
      label: 'Visiter le site',
      href: 'https://www.twentyfirst-consulting.com/',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'Profil LinkedIn',
      href: 'https://www.linkedin.com/in/mohamed-toure-001/',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      id: 'download',
      icon: Download,
      label: 'Télécharger ma fiche contact',
      onClick: downloadVCard,
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'calendar',
      icon: Calendar,
      label: 'Réserver un appel',
      href: 'mailto:toure@twentyfirst-consulting.com?subject=Demande%20de%20rendez-vous&body=Bonjour%20Mohamed,%0A%0AJe%20souhaite%20réserver%20un%20appel%20avec%20vous.%20Pouvez-vous%20me%20proposer%20des%20disponibilit%C3%A9s%20via%20Teams%20ou%20un%20autre%20outil%20?%0A%0AMerci%20!%0A%0A[Ton%20Nom]',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Profile Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="relative inline-block mb-6 animate-float">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 flex items-center justify-center shadow-2xl ring-8 ring-white/20 relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer"></div>
              <img 
                src="/mt.jpeg" 
                alt="Mohamed Toure" 
                className="w-full h-full object-cover rounded-full relative z-10" 
              />
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center ring-4 ring-white/80 shadow-lg border-2 border-white/90 z-20">
                <CheckCircle className="w-4 h-4 text-white" fill="currentColor" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight flex items-center justify-center gap-2">
            Mohamed TOURE
            <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full ring-1 ring-blue-600/50 animate-pulse">
              Vérifié
            </div>
          </h1>
          
          <div className="max-w-xl mx-auto">
            <p className="text-lg text-blue-100 leading-relaxed">
              Co-Founder & Managing Partner | Entrepreneur
            </p>
            <p className="text-md text-blue-200 mt-2">
              Ex Deloitte, EY, KPMG | Choiseul 100 Africa Laureate
            </p>
            <p className="text-md text-blue-200">
              Strategy & Digital Transformation Advisor
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {buttons.map((button, index) => {
            const Icon = button.icon;
            const ButtonComponent = button.onClick ? 'button' : 'a';
            
            return (
              <ButtonComponent
                key={button.id}
                href={button.href}
                onClick={button.onClick}
                target={button.href ? '_blank' : undefined}
                rel={button.href ? 'noopener noreferrer' : undefined}
                onMouseEnter={() => setHoveredButton(button.id)}
                onMouseLeave={() => setHoveredButton(null)}
                className="block w-full group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`
                  relative overflow-hidden
                  bg-white/10 backdrop-blur-lg
                  border border-white/20
                  rounded-2xl p-5
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:bg-white/20
                  hover:shadow-2xl hover:shadow-blue-500/20
                  ${hoveredButton === button.id ? 'translate-x-2' : ''}
                `}>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`
                      w-14 h-14 rounded-xl
                      bg-gradient-to-br ${button.gradient}
                      flex items-center justify-center
                      shadow-lg
                      transition-transform duration-300
                      ${hoveredButton === button.id ? 'rotate-12 scale-110' : ''}
                    `}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <span className="text-white text-lg font-medium flex-grow text-left">
                      {button.label}
                    </span>
                    
                    <div className={`
                      transition-transform duration-300
                      ${hoveredButton === button.id ? 'translate-x-2' : ''}
                    `}>
                      <svg 
                        className="w-6 h-6 text-white/70" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-r ${button.gradient} opacity-0
                    transition-opacity duration-300
                    ${hoveredButton === button.id ? 'opacity-10' : ''}
                  `}></div>
                </div>
              </ButtonComponent>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <p className="text-blue-200/60 text-sm">
            Twenty First Consulting Group
          </p>
        </div>
      </div>
    </div>
  );
}
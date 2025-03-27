import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ScrollAnimation from '../components/ScrollAnimation';

const ContactContainer = styled.section`
  padding-top: 120px;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--dark);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Novo componente de tabela para informações de contato
const ContactInfoTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1.5rem;
`;

const ContactInfoRow = styled.tr`
  vertical-align: top;
`;

const ContactInfoIconCell = styled.td`
  padding-right: 1rem;
  width: 50px;
`;

const ContactInfoContentCell = styled.td`
  padding-bottom: 0.5rem;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(64, 160, 86, 0.1);
  color: var(--primary);
  border-radius: 50%;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 0.5rem;
`;

const ContactInfoText = styled.p`
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.6;
`;

const ContactInfoLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-dark);
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
`;

const ContactFormWrapper = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: 0 4px 10px var(--card-shadow);
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--dark);
`;

const FormInput = styled.input`
  padding: 0.875rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: var(--bg-secondary);
  color: var(--text);

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.875rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;
  background-color: var(--bg-secondary);
  color: var(--text);

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.875rem 1.75rem;
  background-color: var(--primary);
  color: white;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-dark);
  }

  &:disabled {
    background-color: var(--secondary);
    cursor: not-allowed;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Preparar os dados para o mailto
    const recipientEmail = 'beralb@tutanota.com';
    const formattedSubject = encodeURIComponent(`Contato via Website: ${formData.subject}`);
    const formattedBody = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Mensagem:\n${formData.message}\n\n` +
      `Enviado do formulário de contato do website.`
    );
    
    // Criar o link mailto e abrir no cliente de email
    const mailtoLink = `mailto:${recipientEmail}?subject=${formattedSubject}&body=${formattedBody}`;
    window.location.href = mailtoLink;
    
    // Limpar o formulário após 1 segundo (para dar tempo do link mailto ser processado)
    setIsSubmitting(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <ContactContainer id="contact">
      <div className="container">
        <ScrollAnimation>
          <SectionTitle>Entre em Contato</SectionTitle>
        </ScrollAnimation>

        <ContactContent>
          <ScrollAnimation direction="left" delay={0.2}>
            <ContactInfo>
              <ContactInfoTable>
                <tbody>
                  <ContactInfoRow>
                    <ContactInfoIconCell>
                      <IconWrapper>
                        <FaEnvelope />
                      </IconWrapper>
                    </ContactInfoIconCell>
                    <ContactInfoContentCell>
                      <ContactInfoTitle>Email</ContactInfoTitle>
                      <ContactInfoText>
                        <ContactInfoLink href="mailto:beralb@tutanota.com">
                          beralb@tutanota.com
                        </ContactInfoLink>
                      </ContactInfoText>
                    </ContactInfoContentCell>
                  </ContactInfoRow>
                  <ContactInfoRow>
                    <ContactInfoIconCell>
                      <IconWrapper>
                        <FaMapMarkerAlt />
                      </IconWrapper>
                    </ContactInfoIconCell>
                    <ContactInfoContentCell>
                      <ContactInfoTitle>Localização</ContactInfoTitle>
                      <ContactInfoText>
                        Fortaleza, Ceará - Brasil
                      </ContactInfoText>
                    </ContactInfoContentCell>
                  </ContactInfoRow>
                </tbody>
              </ContactInfoTable>

              <SocialLinks>
                <ContactInfoTable>
                  <tbody>
                    <ContactInfoRow>
                      <ContactInfoIconCell>
                        <IconWrapper>
                          <FaWhatsapp />
                        </IconWrapper>
                      </ContactInfoIconCell>
                      <ContactInfoContentCell>
                        <ContactInfoTitle>WhatsApp</ContactInfoTitle>
                        <ContactInfoText>
                          <ContactInfoLink 
                            href="https://wa.me/5585986050157" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Enviar mensagem
                          </ContactInfoLink>
                        </ContactInfoText>
                      </ContactInfoContentCell>
                    </ContactInfoRow>
                    <ContactInfoRow>
                      <ContactInfoIconCell>
                        <IconWrapper>
                          <FaLinkedin />
                        </IconWrapper>
                      </ContactInfoIconCell>
                      <ContactInfoContentCell>
                        <ContactInfoTitle>LinkedIn</ContactInfoTitle>
                        <ContactInfoText>
                          <ContactInfoLink 
                            href="https://linkedin.com/in/yourprofile" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Ver perfil
                          </ContactInfoLink>
                        </ContactInfoText>
                      </ContactInfoContentCell>
                    </ContactInfoRow>
                  </tbody>
                </ContactInfoTable>
              </SocialLinks>
            </ContactInfo>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.4}>
            <ContactFormWrapper>
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="subject">Assunto</FormLabel>
                  <FormInput
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="message">Mensagem</FormLabel>
                  <FormTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <ScrollAnimation delay={0.2}>
                  <SubmitButton 
                    type="submit" 
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? 'Abrindo cliente de email...' : 'Enviar Mensagem'}
                  </SubmitButton>
                </ScrollAnimation>
              </ContactForm>
            </ContactFormWrapper>
          </ScrollAnimation>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact; 
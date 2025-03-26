import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
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
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(64, 160, 86, 0.1);
  color: var(--primary);
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-3px);
  }
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

const SuccessMessage = styled(motion.div)`
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid var(--success);
  color: var(--success);
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  margin-top: 1rem;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
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
                <SocialLink 
                  href="https://github.com/beralb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </SocialLink>
                <SocialLink 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialLink>
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
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </SubmitButton>
                </ScrollAnimation>

                {isSuccess && (
                  <SuccessMessage
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </SuccessMessage>
                )}
              </ContactForm>
            </ContactFormWrapper>
          </ScrollAnimation>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact; 
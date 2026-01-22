/**
 * Componente para integrar o chatbot Elfsight
 * O script é carregado diretamente no index.html
 */
const Chatbot = () => {
  // ID do widget Elfsight
  const widgetId = 'ee177f20-c94a-4f4e-bd66-5f462fadf684';

  return (
    <div 
      className={`elfsight-app-${widgetId}`}
      data-elfsight-app-lazy
      style={{ zIndex: 40 }}
    />
  );
};

export default Chatbot;


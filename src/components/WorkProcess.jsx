import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';
import './WorkProcess.css';

const steps = [
  {
    icon: <Lightbulb />,
    title: '1. Planning',
    description: 'We analyze your requirements and create a flawless project plan to ensure success.'
  },
  {
    icon: <PenTool />,
    title: '2. Design',
    description: 'Focusing on user experience, we craft modern and highly engaging UI designs.'
  },
  {
    icon: <Code2 />,
    title: '3. Development',
    description: 'We build highly secure and scalable systems using the latest technologies.'
  },
  {
    icon: <Rocket />,
    title: '4. Delivery',
    description: 'After rigorous testing, we launch the project on time and provide ongoing support.'
  }
];

const WorkProcess = () => {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <h2 className="section-title">Our Work Process</h2>
        <p className="section-subtitle">
          We follow a highly organized and professional approach to turn a great idea into reality.
        </p>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="step-icon-wrapper">
                {step.icon}
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';
import './WorkProcess.css';

const steps = [
  {
    icon: <Lightbulb />,
    title: '১. পরিকল্পনা',
    description: 'আপনার প্রয়োজনীয়তা বিশ্লেষণ করে একটি নিশ্ছিদ্র প্রজেক্ট প্ল্যান তৈরি করা হয়।'
  },
  {
    icon: <PenTool />,
    title: '২. ডিজাইন',
    description: 'ইউজার এক্সপেরিয়েন্সকে প্রাধান্য দিয়ে আধুনিক ও আকর্ষণীয় ইউআই (UI) তৈরি করা হয়।'
  },
  {
    icon: <Code2 />,
    title: '৩. ডেভেলপমেন্ট',
    description: '최신 (সর্বশেষ) প্রযুক্তি ব্যবহার করে অত্যন্ত নিরাপদ এবং স্কেলেবল সিস্টেম ডেভেলপ করা হয়।'
  },
  {
    icon: <Rocket />,
    title: '৪. ডেলিভারি',
    description: 'যথাযথ টেস্টিং শেষে সময়মতো প্রজেক্ট লাইভ করা হয় এবং সহায়তা প্রদান করা হয়।'
  }
];

const WorkProcess = () => {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <h2 className="section-title">আমাদের কাজের ধারা</h2>
        <p className="section-subtitle">
          একটি সুন্দর আইডিয়াক বাস্তব রূপ দিতে আমরা অত্যন্ত গোছানো ও পেশাদার একটি পদ্ধতি অনুসরণ করি।
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

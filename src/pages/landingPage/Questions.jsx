import { useState } from "react";
import Accordion from "../../UI/Accordion";

function Questions() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? -1 : index); 
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-6 ">Frequently Asked Questions</h2>

      <Accordion
        title="How do I join an organization to vote?"
        isOpen={openIndex === 0}
        onClick={() => toggleAccordion(0)}
      >
        You can join an organization by accepting an invite link from the admin or by signing up with a pre-approved email.
      </Accordion>

      <Accordion
        title="Can I vote in more than one organization?"
        isOpen={openIndex === 1}
        onClick={() => toggleAccordion(1)}
      >
        Yes. You can be a voter in multiple organizations as long as you’ve been invited or approved by each one.
      </Accordion>

      <Accordion
        title="What happens after I cast my vote?"
        isOpen={openIndex === 2}
        onClick={() => toggleAccordion(2)}
      >
        Your vote is securely recorded and cannot be changed. You’ll receive a confirmation once it's successfully submitted.
      </Accordion>

      <Accordion
        title="How do I know if an election is ongoing?"
        isOpen={openIndex === 3}
        onClick={() => toggleAccordion(3)}
      >
        The voting page lists elections under 'Upcoming', 'Ongoing', and 'Closed'. Only ongoing ones are active for voting.
      </Accordion>

      <Accordion
        title="Will I receive results after voting ends?"
        isOpen={openIndex === 4}
        onClick={() => toggleAccordion(4)}
      >
        Yes. You’ll get the final results via email, and they’ll also be accessible in the app under the Results section.
      </Accordion>
    </section>
  );
}

export default Questions;

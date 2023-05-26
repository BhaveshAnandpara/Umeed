import React from 'react'
import '../ProblemBar/ProblemBar.css'
import '../Depression/Depression.css'


export default function Depression() {
  return (
    <div>

      <div className='ProblemBarContainer'>


        <div className="About">
          <a className='About_anchor' href='#IdAboutInfo'  ><p>About </p></a>
        </div>
        <div className="Causes">
          <a className='Causes_anchor' href='#IdCauses' ><p>Causes</p></a>
        </div>
        <div className="Symptoms">
          <a className='Symptoms_anchor' href='#IdSymptoms'  ><p>Symptoms</p></a>

        </div>
        <div className="Effects">
          <a className='Effects_anchor' href='#IdEffects'><p>Effects</p></a>

        </div>
        <div className="Remedies">
          <a className='Remedies_anchor' href='#IdRemedies'><p>Remedies</p></a>
        </div>

      </div>



      <div className="DepresionContainer">

        <div className="Heading" id='IdAboutInfo'>
          Depression</div>


        <div className="AboutInfo" >
          <p className='PaboutInfo'>

            Did you know According to WHO 3.8% of world population ( 266 Million ) is going through depression.
            But don’t worry we tried to combine a structured solution with the support of all the people familiar with your situation.
          </p>
        <div className="depressionImg"></div>
        </div>
        

        <div className="CausesContainer" id='IdCauses'>
          <div className="Heading">
            <p>CAUSES</p>
          </div>
          <div className="AboutInfo">
            <p>Depression can be caused by a variety of factors, including:
              <ul>
                <li><strong>Genetics: </strong> There is evidence to suggest that depression may run in families and that certain genes may increase the risk of developing depression.</li>

                <li><strong>Brain chemistry: </strong>Depression is believed to be related to imbalances in certain chemicals in the brain, such as serotonin and dopamine.</li>

                <li><strong>Environmental factors:</strong> Stressful life events, such as the loss of a loved one, a relationship breakup, financial problems, or a serious illness can trigger depression.</li>

                <li><strong>Medical conditions:</strong> Certain medical conditions, such as chronic pain, thyroid disorders, or hormonal imbalances, can contribute to the development of depression.</li>

                <li><strong>Substance abuse:</strong> Alcohol and drug abuse can increase the risk of developing depression, both by disrupting brain chemistry and by causing social and personal problems.</li>

                <li><strong>Personality factors:</strong> Certain personality traits, such as low self-esteem, pessimism, and a tendency to worry excessively, can increase the risk of developing depression.</li>

                <li><strong>Lack of social support: </strong>People who lack social support or who are isolated may be more vulnerable to depression.</li>

                It is important to note that depression is a complex disorder, and often has multiple causes. Additionally, not everyone who experiences these risk factors will develop depression.
              </ul></p>
          </div>


          <div className="SymptomsContainer">
            <div className="Heading" id='IdSymptoms'>
              <p>
                SYMPTOMS
              </p>
            </div>
            <div className='AboutInfo'>
              <p>
                Common Symptoms of Depression
                <strong>
                  <ul>
                    <li>Weight loss or gain</li>
                    <li>Excessive sleeping</li>
                    <li>Feeling irritable or sad, everyday</li>
                    <li>Insomnia</li>
                    <li>Feeling worthless or guilty</li>
                    <li>Difficulty in concentrating</li>
                    <li>Suicidal thoughts or death</li>
                  </ul>
                </strong>
              </p>
            </div>
          </div>

          <div className="EffectsContainer">
            <div className="Heading" id='IdEffects'>
              <p>EFFECTS</p>
            </div>
            <div className="AboutInfo">
              <p>
                Depression can have a significant impact on a person's life and well-being. Some of the effects of depression may include:
                <ul>
                  <li><strong>Persistent sadness:</strong> Depression can cause a pervasive feeling of sadness or emptiness that lasts for weeks, months, or even years.</li>

                  <li><strong>Loss of interest:</strong> People with depression may lose interest in activities they once enjoyed, and may feel a general lack of pleasure or satisfaction in life.</li>

                  <li><strong>Fatigue:</strong>  Depression can cause extreme fatigue and a lack of energy, making it difficult to carry out even simple tasks.</li>

                  <li><strong>Sleep disturbances:</strong> Depression can disrupt sleep patterns, causing difficulty falling asleep, waking up frequently during the night, or oversleeping.</li>

                  <li><strong>Changes in appetite:</strong> Depression can lead to significant changes in appetite, causing people to either overeat or lose their appetite.</li>

                  <li><strong>Physical symptoms:</strong> Depression can cause physical symptoms such as headaches, stomachaches, or back pain.</li>

                  <li><strong>Difficulty concentrating:</strong> People with depression may have trouble focusing, making decisions, or remembering things.</li>

                  <li><strong>Social isolation:</strong>Depression can cause people to withdraw from social activities and avoid spending time with friends or family.</li>

                  <li><strong>Suicidal thoughts or behaviors:</strong> In severe cases, depression can lead to suicidal thoughts or behaviors, which require immediate attention and treatment.</li>
                </ul>
                It's important to note that depression can affect individuals differently and the severity of these effects may vary. If you or someone you know is experiencing symptoms of depression, it's important to seek professional help.


              </p>


            </div>

          </div>

          <div className="RemediesContainer">
            <div className="Heading" id='IdRemedies'>
              REMEDIES
            </div>
            <div className="AboutInfo">
              <p>


                Depression is a complex condition that can have various underlying causes. While it is essential to consult a mental health professional for an accurate diagnosis and treatment plan, some general remedies may help alleviate depression symptoms. Here are a few remedies:
                <ul>
                  <li><strong>Talk therapy: </strong>Also known as psychotherapy or counseling, talk therapy can help individuals address their underlying emotions, thoughts, and behaviors that may contribute to their depression. Different types of talk therapy, such as cognitive-behavioral therapy (CBT) or interpersonal therapy (IPT), can help manage depression symptoms.</li>

                  <li><strong>Medication:</strong> Antidepressant medications, such as selective serotonin reuptake inhibitors (SSRIs) or tricyclic antidepressants (TCAs), can help manage depression symptoms. However, medication should only be prescribed and monitored by a qualified healthcare provider.</li>

                  <li><strong>Exercise:</strong> Physical activity can help release endorphins, which are natural mood-boosting chemicals. Regular exercise can also help reduce stress and improve overall physical health.</li>

                  <li><strong>Sleep hygiene: </strong>Adequate sleep is essential for overall physical and mental health. Creating a bedtime routine, reducing screen time before bed, and avoiding caffeine and alcohol can help improve sleep hygiene.</li>

                  <li><strong>Social support:</strong> Engaging in social activities and spending time with loved ones can help combat feelings of isolation and loneliness. Joining a support group or talking with friends and family about depression can also provide a sense of connection and support.</li>
                </ul>
                It is essential to remember that depression is a complex condition that requires a multifaceted treatment approach. Seeking the guidance of a qualified mental health professional can help identify the most effective treatment plan for an individual's specific needs.
              </p>
            </div>
          </div>



        </div>
      </div>
{/* Shivam */}


    </div>
  )
}

<template>
  <div class="schedule">
    <div v-for="(session, i) in sessions" :key="i" class="session-wrap">
      <div
        class="session-row"
        :class="{ active: openIndex === i }"
        @click="toggle(i)"
      >
        <span class="session-time">{{ session.time }}</span>
        <div class="session-body">
          <div class="session-title">{{ session.title }}</div>
          <div class="session-speaker">{{ session.speakers.map(s => s.name).join(', ') }}</div>
        </div>
        <span class="chevron" :class="{ open: openIndex === i }">&#8964;</span>
      </div>

      <div v-if="openIndex === i" class="detail-panel">
        <div class="detail-session-title">{{ session.title }}</div>
        <div class="detail-desc">{{ session.description }}</div>

        <div class="speakers-list">
          <div v-for="(speaker, j) in session.speakers" :key="j" class="speaker-row">
            <img
              v-if="speaker.photo"
              :src="speaker.photo"
              :alt="speaker.name"
              class="speaker-photo"
              @error="onImgError"
            />
            <div v-else class="speaker-initials">{{ getInitials(speaker.name) }}</div>
            <div class="speaker-detail">
              <div class="speaker-name">
  <a v-if="speaker.linkedin" :href="speaker.linkedin" target="_blank" rel="noopener">
    {{ speaker.name }}
  </a>
  <span v-else>{{ speaker.name }}</span>
</div>
              <div class="speaker-title-text">{{ speaker.title }}</div>
              <div class="speaker-bio">{{ speaker.bio }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

function onImgError(e) {
  e.target.style.display = 'none'
}

const sessions = [
  {
    time: '8:30 AM',
    title: 'Event Kickoff & Welcome',
    description: 'Your hosts kick off Agent Academy Live and set the stage for a full day of technical sessions, live demos, and the hackathon launch.',
    speakers: [
      {
        name: 'April Dunnam',
        title: 'Principal Cloud Advocate, AI & Power Platform | Microsoft',
        photo: 'https://sessionize.com/image/5b98-400o400o2-JDGZPVdqmS1ecQrY9zxqZi.jpg',
        bio: 'April Dunnam is a Principal Cloud Advocate at Microsoft, Microsoft Certified Trainer, and MVP alumni known for demystifying the Power Platform and AI for developers and makers alike. She runs a popular YouTube channel dedicated to Power Platform and AI, and is a frequent speaker at international conferences.',
        linkedin: 'https://www.linkedin.com/in/aprildunnam/'
      },
      {
        name: 'Dona Sarkar',
        title: 'Chief Troublemaker, Microsoft AI and Copilot Extensibility Program | Microsoft',
        photo: './assets/dona.jpeg',
        bio: 'Dona believes that you are one experiment away from being your most powerful self at work — and in life. As Chief Troublemaker of the Microsoft AI and Copilot Extensibility Program, she runs 100 experiments with one goal: helping people all over the world use Microsoft\'s AI and Copilot programs to reason over their own data and make AI truly useful for their business. Dona is also a keynote speaker, multi-published author, owner of the ethical luxury fashion brand Prima Dona Studios, and a wine bar co-owner currently studying to become a sommelier. She\'s been named one of Fast Company\'s 100 Most Productive People and Cosmopolitan\'s Businessperson of the Year — and she is always ready to get on a plane and come see you.',
        linkedin: 'https://www.linkedin.com/in/donasarkar/'
      }
    ]
  },
  {
    time: '8:35 AM',
    title: 'Keynote: How Work Gets Done in the Age of AI: Copilot, Apps and Agents',
    description: 'A vision keynote on the future of AI agents — how Copilot, apps, and agents are reshaping how work gets done across organizations. Features live demos showing real-world agent patterns in action.',
    speakers: [
      {
        name: 'Ryan Cunningham',
        title: 'CVP, Power Platform | Microsoft',
        photo: 'https://as-prd-centralus-svc-powerplatformconf.azurewebsites.net/_next/image?q=75&url=https%3A%2F%2Fdevintxcontent.blob.core.windows.net%2Fshowcontent%2Fspeakers%2Fryan_cunningham_400x400_NEW.png&w=750',
        bio: 'Ryan Cunningham is the Corporate Vice President of Power Platform, Microsoft\'s low-code application development platform. He is a recognized subject matter expert in the low-code movement and frequently speaks about the impact of generative AI on software development and how customers use Power Platform to build scalable innovation cultures.',
        linkedin: 'https://www.linkedin.com/in/rycu/',
      },
      {
        name: 'Derah Onuorah',
        title: 'Product Manager II, Power Automate | Microsoft',
        photo: './assets/derah.jpeg',
        bio: 'Derah Onuorah is a Product Manager at Microsoft working on Power Automate within the Intelligent Automations Team. She builds AI-powered products and features that help customers automate and enhance their business processes, and is passionate about the potential of AI to transform how we work.',
        linkedin: 'https://www.linkedin.com/in/derah-onuorah/',
      },
      {
        name: 'Shilpi Sinha',
        title: 'Partner Director Group Product Manager | Microsoft',
        photo: './assets/shilpi.jpeg',
        bio: 'Shilpi Sinha is the product leader for the M365 Admin Center, focused on enabling experiences for the Copilot Control System including Copilot and Agent management, governance, and analytics within the Microsoft Admin Center.',
        linkedin: 'https://www.linkedin.com/in/shilpi-sinha-07740b26/',
      }
    ]
  },
  {
    time: '9:25 AM',
    title: 'Agent Flows: Build Agentic Automations You Can Trust',
    description: 'Deep dive into Agent Flows — how to build agentic automations that are reliable, observable, and production-ready inside Copilot Studio.',
    speakers: [
      {
        name: 'Joe Fernandez',
        title: 'Product Manager, AI Builder | Microsoft',
        photo: 'https://www.microsoft.com/en-us/power-platform/blog/wp-content/uploads/2024/06/Joe-Fernandez.png',
        bio: 'Joe Fernandez is a Microsoft product leader focused on AI Builder, Power Automate, and agentic automation experiences in the Power Platform, with a focus on document processing capabilities that help citizen developers use AI to automate complex workflows.',
        linkedin: 'https://www.linkedin.com/in/fernandezjoe/',
      }
    ]
  },
  {
    time: '9:58 AM',
    title: 'Building Employee Experience Agents with Microsoft Copilot Studio and MCP Integration',
    description: 'Learn how to build agents that improve employee experience using Copilot Studio and Model Context Protocol (MCP) integrations for real business scenarios.',
    speakers: [
      {
        name: 'Yang Liu',
        title: 'Manager, EY Technology Consulting | Microsoft MVP',
        photo: 'https://sessionize.com/image/4d2d-400o400o2-LSHK6GhAMWz2r2VHxsgVYG.jpg',
        bio: 'Yang has 9 years of experience with Microsoft products focused on Dynamics 365, Power Platform, and Copilot Studio, holding 10 Microsoft certifications. She leads "Code Club at EY," a volunteering initiative where young people develop their interest in technology, and is passionate about inspiring more girls into tech careers.',
        linkedin: 'https://www.linkedin.com/in/yang-liu-796211b1/'
      }
    ]
  },
  {
    time: '10:35 AM',
    title: 'Agentic User Interfaces in Copilot and Power Platform',
    description: 'Explore how agentic UI patterns are evolving across Copilot and the Power Platform — and how to design interfaces that let agents surface the right information at the right time.',
    speakers: [
      {
        name: 'Andreas Adner',
        title: 'Power Platform Consultant & AI Strategist | Mavrix',
        photo: 'https://sessionize.com/image/1483-400o400o2-hntHDw95B3EfqE8SHRtQmE.png',
        bio: 'Andreas Adner is a Power Platform developer and solution architect interested in the exciting possibilities that AI has to offer to the Power Platform community.',
        linkedin: 'https://www.linkedin.com/in/andreasadner/',
      }
    ]
  },
  {
    time: '11:06 AM',
    title: 'From Build to Operate: ALM Patterns for Production-Ready Copilot Studio Agents',
    description: 'The gap between a working demo and a production agent is ALM. Learn the patterns, pipelines, and practices you need to ship agents you can actually maintain and operate.',
    speakers: [
      {
        name: 'Marcel Ferreira',
        title: 'Senior Product Manager | Microsoft',
        photo: 'https://developer.microsoft.com/reactor/mediahandler/speakers/images/speaker_images/MarcelFerreira_20250110140612452.jpeg',
        bio: 'Marcel Ferreira is a Senior Product Manager for Pro Developers on the Power Platform team at Microsoft, with 10 years of experience as a software developer for business applications. He focuses on Power Platform pro-developer experiences.',
        linkedin: 'https://www.linkedin.com/in/marcelbf/',
      }
    ]
  },
  {
    time: '11:39 AM',
    title: 'Trust but Verify: Testing Agents in Copilot Studio',
    description: 'Testing agents isn\'t like testing traditional software. Vivian walks through practical testing strategies for Copilot Studio agents — from conversation testing to evaluation patterns that give you confidence before you ship.',
    speakers: [
      {
        name: 'Vivian Voss',
        title: 'Microsoft Business Applications & M365 MVP | Power Platform Architect',
        photo: 'https://sessionize.com/image/44a5-400o400o2-pRV5P4RdRqjm6uW4QqKxw9.png',
        bio: 'Vivian Voss is a Microsoft Business Applications and M365 MVP with around 10 years of experience building solutions within the Dynamics 365 suite and Power Platform. She is a co-organizer of multiple user groups and a frequent speaker at community events worldwide.',
        linkedin: 'https://www.linkedin.com/in/viviantiiman/',
      }
    ]
  },
  {
    time: '12:14 PM',
    title: 'M365 Copilot and Work IQ: Powering Agent Business Workflows',
    description: 'How M365 Copilot and Dataverse Work IQ combine to power intelligent, data-grounded agent workflows across the business.',
    speakers: [
      {
        name: 'Julie Koesmarno',
        title: 'Principal Group Product Manager, Microsoft Dataverse | Microsoft',
        photo: 'https://www.sharepointeurope.com/wp-content/uploads/2025/04/Julie-Koesmarno-600x600.jpg',
        bio: 'Julie Koesmarno leads teams focused on data, AI, and UX innovation for Microsoft Dataverse, with a current focus on shaping Copilot experiences within Dataverse, Power Apps, and Copilot Studio. Her background spans Azure Data Studio, SQL, analytics, and big data platforms.',
        linkedin: 'https://www.linkedin.com/in/juliekoesmarno/',
      }
    ]
  },
  {
    time: '12:45 PM',
    title: 'Your Platform, Now Agentic: How Power Platform Turns Existing Apps Into Frontier Firm Solutions',
    description: 'Leon shares how Power Platform is evolving to support the frontier firm — where agents, apps, and automation work together to transform existing business investments into AI-powered solutions.',
    speakers: [
      {
        name: 'Leon Welicki',
        title: 'VP & Chief Product Officer, Power Apps | Microsoft',
        photo: 'https://as-prd-centralus-svc-powerplatformconf.azurewebsites.net/_next/image?q=75&url=https%3A%2F%2Fdevintxcontent.blob.core.windows.net%2Fshowcontent%2Fspeakers%2FWelicki_Craig_400x400_251001.png&w=750',
        bio: 'Leon Welicki is Vice President of Product and CPO for Power Apps, leading end-to-end experiences that empower people to participate in the app ecosystem as users, makers, and admins. He holds Software Engineering PhD and MSc degrees and is a frequent presenter on cloud and low-code.',
        linkedin: 'https://www.linkedin.com/in/lwelicki/',
      }
    ]
  },
  {
    time: '1:40 PM',
    title: 'Inside Cowork — Vision, Roadmap & What\'s Next',
    description: 'The CTO of Copilot Studio gives an inside look at Cowork — the vision, current capabilities, roadmap, and what\'s coming next for delegated work in the Microsoft 365 ecosystem.',
    speakers: [
      {
        name: 'Bas Brekelmans',
        title: 'CTO, Microsoft Copilot Studio | Microsoft',
        photo: 'https://vslive.com/events/redmond-2022/speakers/-/media/ECG/EventSpeakerPhotos/Brekelmans_Bas_388.jpg',
        bio: 'Founding architect of Copilot Cowork and past CTO of Copilot Studio, with deep expertise in distributed systems, scalable infrastructure, and AI‑driven developer tooling, shaping the evolution of Microsoft’s agentic AI platform.',
        linkedin: 'https://www.linkedin.com/in/basbrekelmans/',
      }
    ]
  },
  {
    time: '2:08 PM',
    title: 'Agent Hackathon Challenge Kickoff',
    description: 'The official kickoff of the Agent Academy Hackathon. Learn the tracks, rules, prizes, and how to submit your agent before June 2. $12,000 in prizes across four tracks.',
    speakers: [
      {
        name: 'April Dunnam',
        title: 'Principal Cloud Advocate, AI & Power Platform | Microsoft',
        photo: 'https://sessionize.com/image/5b98-400o400o2-JDGZPVdqmS1ecQrY9zxqZi.jpg',
        bio: 'April Dunnam is a Principal Cloud Advocate at Microsoft, Microsoft Certified Trainer, and MVP alumni known for demystifying the Power Platform and AI for developers and makers alike.',
        linkedin: 'https://www.linkedin.com/in/aprildunnam/',
      },
      {
        name: 'David Abu',
        title: 'Product Manager | Microsoft',
        photo: './assets/david.png',
        bio: 'David Abu is a Senior Product Marketing Manager at Microsoft, focused on community building and product marketing for Copilot Studio.',
        linkedin: 'https://www.linkedin.com/in/davidabu/',
      }
    ]
  }
]
</script>

<style scoped>
.schedule {
  width: 100%;
  margin: 1.5rem 0;
}

.session-wrap {
  border-bottom: 0.5px solid var(--vp-c-divider);
}

.session-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.15s;
}

.session-row:hover,
.session-row.active {
  background: var(--vp-c-bg-soft);
}

.session-time {
  font-size: 13px;
  color: var(--vp-c-text-2);
  min-width: 72px;
  padding-top: 2px;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

.session-body {
  flex: 1;
  min-width: 0;
}

.session-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  line-height: 1.45;
}

.session-speaker {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-top: 3px;
}

.chevron {
  font-size: 20px;
  color: var(--vp-c-text-2);
  align-self: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  display: inline-block;
  line-height: 1;
}

.chevron.open {
  transform: rotate(180deg);
}

.detail-panel {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  border: 0.5px solid var(--vp-c-divider);
  padding: 1.25rem;
  margin: 2px 0 10px;
}

.detail-session-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  margin-bottom: 8px;
}

.detail-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.65;
  padding-bottom: 14px;
  border-bottom: 0.5px solid var(--vp-c-divider);
  margin-bottom: 14px;
}

.speakers-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.speaker-row {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.speaker-photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  flex-shrink: 0;
  border: 0.5px solid var(--vp-c-divider);
}

.speaker-initials {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--vp-c-brand-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.speaker-detail {
  flex: 1;
  min-width: 0;
}

.speaker-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.speaker-title-text {
  font-size: 12px;
  color: var(--vp-c-text-2);
  margin-top: 2px;
  margin-bottom: 6px;
}

.speaker-bio {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.65;
}
.speaker-name a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: border-color 0.15s;
}

.speaker-name a:hover {
  border-bottom-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>

import {
  randomNumberBetween,
  getRandomDateAfter,
  getRandomDateBefore,
} from "@/src/lib/utils.js";
import { randomData } from "@/src/lib/randomData.js";

import { Timestamp } from "firebase/firestore";

export async function generateSampleToolsAndReviews() {
  const toolsToAdd = 13;
  const data = [];

  // Real AI tools data
  const aiTools = [
    {
      name: "ChatGPT",
      description: "Advanced AI language model for conversational AI, content creation, and problem-solving.",
      website: "https://chat.openai.com",
      categories: ["Generative AI", "Writing Assistant", "Research"],
      keyFeatures: ["Natural language processing", "Code generation", "Multi-modal capabilities"],
      supportedPlatforms: ["Web", "API", "Mobile"],
      pricingModel: ["Free", "Freemium", "Paid"],
      pricingDetails: "Free, Plus ($20/mo), Team, Enterprise",
      pricingSource: "Official website",
      alternatives: ["Claude", "Gemini", "Perplexity"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      additionalInfo: "GPT-4 and GPT-4o models available",
    },
    {
      name: "Claude",
      description: "AI assistant focused on being helpful, harmless, and honest with strong reasoning capabilities.",
      website: "https://claude.ai",
      categories: ["Generative AI", "Writing Assistant", "Research"],
      keyFeatures: ["Large context window", "Document analysis", "Safe AI principles"],
      supportedPlatforms: ["Web", "API"],
      pricingModel: ["Free", "Freemium", "Paid"],
      pricingDetails: "Free, Pro ($18/mo), Team, Enterprise",
      pricingSource: "Official website",
      alternatives: ["ChatGPT", "Gemini"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Anthropic_logo.svg/240px-Anthropic_logo.svg.png",
      additionalInfo: "Claude 3.5 Sonnet with 200K context window",
    },
    {
      name: "GitHub Copilot",
      description: "AI-powered code completion tool that helps developers write code faster and with fewer errors.",
      website: "https://github.com/features/copilot",
      categories: ["Code Assistant", "Productivity"],
      keyFeatures: ["Code completion", "Multi-language support", "IDE integration"],
      supportedPlatforms: ["VS Code", "Visual Studio", "JetBrains", "Web"],
      pricingModel: ["Free", "Freemium", "Paid"],
      pricingDetails: "Free (for students), Pro ($10/mo), Enterprise",
      pricingSource: "Official website",
      alternatives: ["Tabnine", "CodeWhisperer", "Cursor"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_Copilot_logo.svg",
      additionalInfo: "Copilot X with advanced features",
    },
    {
      name: "Devin",
      description: "AI software engineer that can autonomously plan, code, and debug complex tasks.",
      website: "https://devin.ai",
      categories: ["Code Assistant", "Autonomous Agents"],
      keyFeatures: ["Autonomous coding", "Planning and execution", "Terminal access"],
      supportedPlatforms: ["Web"],
      pricingModel: ["Paid"],
      pricingDetails: "Contact for pricing",
      pricingSource: "Official website",
      alternatives: ["Cursor", "GitHub Copilot", "Replit AI"],
      photo: "https://devin.ai/assets/images/devin-logo.png",
      additionalInfo: "First AI software engineer",
    },
    {
      name: "Midjourney",
      description: "AI image generation tool that creates stunning artwork from text descriptions.",
      website: "https://midjourney.com",
      categories: ["Image Generation", "Creative"],
      keyFeatures: ["High-quality images", "Artistic styles", "Discord integration"],
      supportedPlatforms: ["Discord", "Web"],
      pricingModel: ["Paid"],
      pricingDetails: "Basic ($10/mo), Standard ($30/mo), Pro ($60/mo), Mega ($120/mo)",
      pricingSource: "Official website",
      alternatives: ["DALL-E", "Stable Diffusion", "Adobe Firefly"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Midjourney_logo.png",
      additionalInfo: "Midjourney v6 with improved quality",
    },
    {
      name: "DALL-E",
      description: "OpenAI's image generation model that creates realistic images and art from natural language.",
      website: "https://openai.com/dall-e-3",
      categories: ["Image Generation", "Creative"],
      keyFeatures: ["Photorealistic images", "Creative art", "API access"],
      supportedPlatforms: ["Web", "API"],
      pricingModel: ["Paid"],
      pricingDetails: "Pay-per-use ($0.04-0.50 per image)",
      pricingSource: "Official website",
      alternatives: ["Midjourney", "Stable Diffusion", "Adobe Firefly"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/1/13/OpenAI_Logo.svg",
      additionalInfo: "DALL-E 3 with improved consistency",
    },
    {
      name: "Jasper",
      description: "AI writing assistant for marketing teams to create content faster and maintain brand voice.",
      website: "https://jasper.ai",
      categories: ["Writing Assistant", "Marketing"],
      keyFeatures: ["Brand voice", "Templates", "SEO optimization"],
      supportedPlatforms: ["Web", "Chrome Extension"],
      pricingModel: ["Paid"],
      pricingDetails: "Creator ($39/mo), Pro ($59/mo), Business",
      pricingSource: "Official website",
      alternatives: ["Copy.ai", "Anyword", "Writesonic"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Jasper_AI_logo.png",
      additionalInfo: "Jasper 2.0 with improved quality",
    },
    {
      name: "Notion AI",
      description: "AI-powered writing assistant integrated into Notion for brainstorming, drafting, and editing.",
      website: "https://notion.so/product/ai",
      categories: ["Writing Assistant", "Productivity"],
      keyFeatures: ["Document integration", "Summarization", "Content expansion"],
      supportedPlatforms: ["Web", "Desktop", "Mobile"],
      pricingModel: ["Paid"],
      pricingDetails: "Add-on ($10/mo per user)",
      pricingSource: "Official website",
      alternatives: ["Obsidian AI", "Craft AI"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
      additionalInfo: "Integrated with Notion workspace",
    },
    {
      name: "Perplexity",
      description: "AI-powered search engine that provides direct answers with cited sources.",
      website: "https://perplexity.ai",
      categories: ["Research", "Generative AI"],
      keyFeatures: ["Real-time information", "Source citations", "Conversational search"],
      supportedPlatforms: ["Web", "Mobile", "API"],
      pricingModel: ["Free", "Freemium", "Paid"],
      pricingDetails: "Free, Pro ($20/mo), Enterprise",
      pricingSource: "Official website",
      alternatives: ["You.com", "Bing AI", "Google SGE"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Perplexity_AI_logo.svg/240px-Perplexity_AI_logo.svg.png",
      additionalInfo: "Perplexity Pro with advanced features",
    },
    {
      name: "Stable Diffusion",
      description: "Open-source image generation model that can be run locally or via cloud services.",
      website: "https://stability.ai",
      categories: ["Image Generation", "Creative"],
      keyFeatures: ["Open source", "Custom models", "Local execution"],
      supportedPlatforms: ["Web", "Local", "API"],
      pricingModel: ["Free", "Open Source", "Paid"],
      pricingDetails: "Free (open source), DreamStudio (pay-per-use)",
      pricingSource: "Official website",
      alternatives: ["Midjourney", "DALL-E", "Adobe Firefly"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Stable_Diffusion_logo.png",
      additionalInfo: "SDXL and SD 3 models available",
    },
    {
      name: "Grammarly",
      description: "AI writing assistant that checks grammar, spelling, and style in real-time.",
      website: "https://grammarly.com",
      categories: ["Writing Assistant", "Productivity"],
      keyFeatures: ["Grammar checking", "Style suggestions", "Plagiarism detection"],
      supportedPlatforms: ["Web", "Desktop", "Mobile", "Browser Extension"],
      pricingModel: ["Free", "Freemium", "Paid"],
      pricingDetails: "Free, Premium ($12/mo), Business ($15/mo)",
      pricingSource: "Official website",
      alternatives: ["ProWritingAid", "Hemingway Editor", "LanguageTool"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Grammarly_logo.svg",
      additionalInfo: "Grammarly Go with mobile keyboard",
    },
    {
      name: "Runway",
      description: "AI-powered video editing and generation platform for creators.",
      website: "https://runwayml.com",
      categories: ["Video Generation", "Creative"],
      keyFeatures: ["Video editing", "AI generation", "Green screen"],
      supportedPlatforms: ["Web", "Desktop"],
      pricingModel: ["Free", "Freemium", "Paid"],
      pricingDetails: "Free, Standard ($12/mo), Pro ($35/mo), Unlimited ($95/mo)",
      pricingSource: "Official website",
      alternatives: ["Pika Labs", "Synthesia", "HeyGen"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Runway_ML_logo.svg/240px-Runway_ML_logo.svg.png",
      additionalInfo: "Gen-3 Alpha video model",
    },
    {
      name: "ElevenLabs",
      description: "AI voice synthesis platform for creating realistic text-to-speech audio.",
      website: "https://elevenlabs.io",
      categories: ["Audio Generation", "Creative"],
      keyFeatures: ["Realistic voices", "Voice cloning", "Multiple languages"],
      supportedPlatforms: ["Web", "API"],
      pricingModel: ["Free", "Freemium", "Paid"],
      pricingDetails: "Free, Starter ($5/mo), Creator ($22/mo), Pro ($99/mo)",
      pricingSource: "Official website",
      alternatives: ["Play.ht", "Murf.ai", "Descript"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ElevenLabs_logo.svg/240px-ElevenLabs_logo.svg.png",
      additionalInfo: "Turbo v2.5 model for faster generation",
    },
  ];

  for (let i = 0; i < toolsToAdd; i++) {
    const toolTimestamp = Timestamp.fromDate(getRandomDateBefore());

    const reviewsData = [];

    // Generate a random number of reviews for this tool
    for (let j = 0; j < randomNumberBetween(0, 5); j++) {
      const reviewTimestamp = Timestamp.fromDate(
        getRandomDateAfter(toolTimestamp.toDate())
      );

      const reviewData = {
        rating:
          randomData.restaurantReviews[
            randomNumberBetween(0, randomData.restaurantReviews.length - 1)
          ].rating,
        text: randomData.restaurantReviews[
          randomNumberBetween(0, randomData.restaurantReviews.length - 1)
        ].text,
        userId: `User #${randomNumberBetween()}`,
        timestamp: reviewTimestamp,
      };

      reviewsData.push(reviewData);
    }

    const avgRating = reviewsData.length
      ? reviewsData.reduce(
          (accumulator, currentValue) => accumulator + currentValue.rating,
          0
        ) / reviewsData.length
      : 0;

    const toolData = {
      ...aiTools[i],
      avgRating,
      numRatings: reviewsData.length,
      sumRating: reviewsData.reduce(
        (accumulator, currentValue) => accumulator + currentValue.rating,
        0
      ),
      lastVerifiedDate: toolTimestamp,
      lastReviewUserId: reviewsData.length > 0 ? reviewsData[reviewsData.length - 1].userId : null,
      timestamp: toolTimestamp,
    };

    data.push({
      toolData,
      reviewsData,
    });
  }
  return data;
}

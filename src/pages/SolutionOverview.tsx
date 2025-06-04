
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Upload, 
  MessageSquare, 
  CheckCircle, 
  Link2, 
  FileText, 
  Eye, 
  Wrench, 
  GitBranch, 
  Bot,
  TrendingUp
} from 'lucide-react';

const SolutionOverview = () => {
  const sections = [
    {
      id: 1,
      title: "Input-Agnostic Onboarding Engine",
      subtitle: "Drop in your messy data, we'll figure it out.",
      icon: Upload,
      background: "bg-white",
      content: {
        description: "No two factories store their data the same way. Our Onboarding Engine accepts literally anything—Excel, CSV, Google Sheets, Word/PDF scans, QuickBooks exports, or raw ERP data dumps—and transforms it into a clean, normalized base for MRP.",
        features: [
          {
            category: "Accept data from:",
            items: ["Excel / CSV / Google Sheets", "PDFs / Word Docs / Scanned files", "QuickBooks Exports", "Generic ERP data dumps"]
          },
          {
            category: "Normalize:",
            items: [
              "Part numbers (resolve duplicates and naming variations)",
              "BOM structures (reconstruct multi-level BOMs even if source data is fragmented)",
              "Vendor lists (dedupe vendor names, normalize addresses, assign IDs)",
              "Inventory policies (safety stock, reorder points, EOQ assumptions)",
              "Conflict resolution for mismatched units or overlapping data",
              "Unit conversions (each data source uses different UoM—'pcs,' 'EA,' 'each,' 'kg,' etc.)"
            ]
          },
          {
            category: "Interactive Q&A Loop:",
            items: [
              "If something remains ambiguous, the AI asks targeted questions ('Which of these two part-numbers represent the same item?')",
              "The user can upload additional photos, PDFs, or drawings for clarification"
            ]
          }
        ]
      }
    },
    {
      id: 2,
      title: "Interactive Process Mapping Agent",
      subtitle: "Guided conversations to map your manufacturing processes.",
      icon: MessageSquare,
      background: "bg-purple-50",
      content: {
        description: "After cleaning your raw data, our AI interviews you in a guided, conversational style—mapping out routings, work centers, labor assignments, and machine groups. It dynamically detects gaps in the initial data ingestion and asks follow-up questions to fill in missing details.",
        features: [
          {
            category: "Process interviews:",
            items: ["The AI agent asks you to confirm routing steps, machine IDs, and labor rates via a natural language interface"]
          },
          {
            category: "Map routings, work centers, etc.:",
            items: ["Automatically generate routing tables (operation sequence) and assign standard times per work center"]
          },
          {
            category: "Gap detection:",
            items: ["If the BOM ingestion missed a machine specification, the agent prompts: 'What machine group handles welding operations?'"]
          },
          {
            category: "Ingest supplemental documentation:",
            items: ["Upload photos, CAD drawings, equipment spec sheets, and the AI will parse dimensions or operational speeds"]
          },
          {
            category: "Build canonical Process IR Model:",
            items: ["The result is a structured, golden-source model of your manufacturing process ready for validation"]
          }
        ]
      }
    },
    {
      id: 3,
      title: "Validation & Simulation Layer",
      subtitle: "Before we load into MRP, we validate everything.",
      icon: CheckCircle,
      background: "bg-white",
      content: {
        description: "Before any MRP data touches your ERP, our AI runs a full series of validation and pre-simulation checks—catching routing loops, capacity issues, and BOM errors ahead of time.",
        features: [
          {
            category: "Routing Validation:",
            items: ["Detect circular loops or missing steps in your operation sequences"]
          },
          {
            category: "Capacity Validation:",
            items: ["Compare shift schedules, machine capabilities, and throughput rates—ensure no step exceeds available capacity"]
          },
          {
            category: "BOM Checks:",
            items: ["Catch impossible part requirements (e.g., 0.5 of a component) and missing components"]
          },
          {
            category: "Preload Simulation:",
            items: ["Run a 'dry-run' simulation: If these machines run at X throughput, can you meet demand? Warnings trigger if not"]
          }
        ]
      }
    },
    {
      id: 4,
      title: "API Adapter & System Integration Layer",
      subtitle: "Seamless integration with your existing ERP systems.",
      icon: Link2,
      background: "bg-purple-50",
      content: {
        description: "polymr.ai doesn't just validate—once your data is proven, we push it into your target MRP/ERP system via a robust set of API adapters.",
        features: [
          {
            category: "Export IR → Target MRP schemes:",
            items: ["Odoo", "Katana", "NetSuite", "Fishbowl", "Global Shop PRM", "SAP (Enterprise tier)"]
          },
          {
            category: "Maintain version mappings:",
            items: ["We keep track of each ERP's version differences—field names, table structures, and API endpoints—so updates to Odoo 14→15 or SAP S/4HANA releases don't break your integration"]
          },
          {
            category: "Support bi-directional sync:",
            items: ["If you make manual edits in your ERP after the initial load, our system can pull those changes back into our model or flag discrepancies"]
          }
        ]
      }
    },
    {
      id: 5,
      title: "Automated SOP & Documentation Generator",
      subtitle: "Always up-to-date work instructions and procedures.",
      icon: FileText,
      background: "bg-white",
      content: {
        description: "As your IR (information repository) evolves, polymr.ai automatically generates up-to-date work instructions, SOPs per routing step, and vendor management policies—in both PDF and in-app formats.",
        features: [
          {
            category: "Generate Work Instructions:",
            items: ["Step-by-step procedures for each routing operation (e.g., 'Operation 1: Cut raw stock → Operation 2: Drill holes → Operation 3: Weld assembly')"]
          },
          {
            category: "SOPs per routing step:",
            items: ["Fully formatted Standard Operating Procedures document, with images, safety notes, and quality checklists"]
          },
          {
            category: "Vendor Management Policies:",
            items: ["Compile vendor lead-time agreements, quality thresholds, and inspection criteria into a single policy document"]
          },
          {
            category: "Export:",
            items: ["PDFs (printable, shareable)", "In-app digital interface (scrollable, accessible from anywhere)"]
          },
          {
            category: "Auto-update:",
            items: ["If you adjust a routing or part spec in the IR, all SOPs instantly regenerate, ensuring your shop floor always uses the latest instructions"]
          }
        ]
      }
    },
    {
      id: 6,
      title: "Continuous Monitoring & Auditing Agent",
      subtitle: "Real-time monitoring of your MRP data integrity.",
      icon: Eye,
      background: "bg-purple-50",
      content: {
        description: "Once your MRP data is live in your ERP, our Continuous Agent watches for anomalies: mismatched inventory, BOM version drift, or routing changes—and instantly alerts you.",
        features: [
          {
            category: "Scheduled audits of live MRP data:",
            items: [
              "Every night (or at your chosen frequency), run checks for:",
              "• Inventory inconsistencies (stock out vs. ERP levels)",
              "• BOM version mismatches (ERP BOM vs. canonical IR model)",
              "• Routing modifications (unexpected changes in routes)"
            ]
          },
          {
            category: "Real-time alerting:",
            items: ["We'll send email or Slack notifications whenever anomalies appear—so you can intervene before production stops"]
          },
          {
            category: "Review dashboard:",
            items: ["A dedicated auditing dashboard where you can approve or dismiss flagged issues—for human-in-the-loop oversight"]
          }
        ]
      }
    },
    {
      id: 7,
      title: "Self-Healing Master Data Agent",
      subtitle: "Automatically adapt to changing supplier and production conditions.",
      icon: Wrench,
      background: "bg-white",
      content: {
        description: "Even after go-live, parts of your MRP data can drift: vendor lead times change, supplier reliability shifts, production time variances crop up. Our Self-Healing Agent detects these drifts and suggests updates.",
        features: [
          {
            category: "Drift detection:",
            items: ["Monitor vendor lead-time history—if Vendor A's average lead time jumps from 7 days to 14 days, the AI flags it"]
          },
          {
            category: "Supplier reliability tracking:",
            items: ["Compute a supplier score based on on-time delivery, defect rates, and responsiveness"]
          },
          {
            category: "Production time deviation:",
            items: ["Compare actual Takt times vs. planned times—if a workstation is now slower/faster, adjust routing times"]
          },
          {
            category: "Automated suggestions:",
            items: [
              "Every week, our agent proposes:",
              "• BOM updates (e.g., switch to alternate vendor)",
              "• Routing tweaks (e.g., allocate extra capacity to Machine X)",
              "• Vendor policy adjustments (e.g., increase buffer if defect rate >5%)"
            ]
          },
          {
            category: "Audit trail:",
            items: ["All proposed or auto-applied changes get logged with date/time and user review stamps"]
          }
        ]
      }
    },
    {
      id: 8,
      title: "Change Management & Version Control",
      subtitle: "Full traceability and rollback capabilities for all changes.",
      icon: GitBranch,
      background: "bg-purple-50",
      content: {
        description: "Every time you modify BOMs, routings, or vendor assignments, polymr.ai keeps a full version history—so you can propose, review, approve, and rollback changes seamlessly.",
        features: [
          {
            category: "Full version control for:",
            items: ["BOMs", "Routings", "Vendor assignments"]
          },
          {
            category: "Propose → Review → Apply pipeline:",
            items: ["Your engineers can propose a BOM change. Supervisors get an email alert to review. Once approved, the change goes live across MRP runs"]
          },
          {
            category: "Rollback capability:",
            items: ["In case something goes wrong, revert to any previous version in one click—no manual database restores required"]
          }
        ]
      }
    },
    {
      id: 9,
      title: "Agentic User Interface",
      subtitle: "Natural language Q&A for your MRP data.",
      icon: Bot,
      background: "bg-white",
      content: {
        description: "Interacting with polymr.ai is as simple as a chat. Ask natural language questions—our AI understands context and fetches the answer from your MRP data.",
        features: [
          {
            category: "Example queries:",
            items: [
              "\"Where are my current BOM inconsistencies?\"",
              "\"Which vendor is at risk for part X?\"",
              "\"Suggest an updated routing for Product Y based on the last 6 months of throughput data.\""
            ]
          },
          {
            category: "Context-aware queries:",
            items: ["The AI uses session history to understand follow-ups—\"Show me Vendor A's lead time\" → \"How many parts are impacted if that lead time doubles?\""]
          },
          {
            category: "Continuous refinement loop:",
            items: ["If the AI doesn't know something, it asks clarifying questions in real time, ensuring the model stays aligned with your business"]
          }
        ]
      }
    },
    {
      id: 10,
      title: "Process Intelligence & Optimization",
      subtitle: "Advanced optimization algorithms (Coming Soon).",
      icon: TrendingUp,
      background: "bg-purple-50",
      content: {
        description: "polymr.ai will incorporate advanced optimization algorithms—leveraging historical production, cost, and market data to recommend leaner production plans.",
        features: [
          {
            category: "Coming Soon:",
            items: ["Advanced process optimization", "Cost reduction recommendations", "Market-driven production planning"]
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solution Overview
          </h1>
          <h2 className="text-2xl text-gray-600 mb-6">
            Final Product in Mind: What polymr.ai Delivers
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            polymr.ai combines multiple AI agents to ingest any format of data, build canonical manufacturing intelligence, 
            simulate and validate before pushing into your ERP, and then continuously monitor, audit, and self-heal your 
            MRP workflows—all without a consultant.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="py-20">
        {sections.map((section, index) => (
          <section key={section.id} className={`py-16 ${section.background}`}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-6">
                    <div className="bg-purple-100 rounded-lg p-4">
                      <section.icon className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <p className="text-xl text-gray-600 mb-8">{section.subtitle}</p>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    {section.content.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.content.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="h-full">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">{feature.category}</h4>
                        <ul className="space-y-2">
                          {feature.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 text-sm leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Call-to-Action */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to see how all these AI agents work together?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Request a personalized demo now.
          </p>
          <Link to="/demo">
            <Button 
              variant="outline" 
              className="bg-white text-purple-600 border-white hover:bg-purple-50 text-lg px-8 py-3"
            >
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionOverview;

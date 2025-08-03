import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Text3D, Center } from "@react-three/drei";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Upload, Eye, Download, Boxes, Palette, Zap } from "lucide-react";
import { toast } from "sonner";

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  software: string;
  tags: string[];
  thumbnail: string;
  isDefault: boolean;
  file?: File;
}

// 3D Scene Component
const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      {/* Animated 3D Objects */}
      <mesh position={[-2, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
      
      <mesh position={[2, 0, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#06b6d4" />
      </mesh>
      
      <mesh position={[0, 2, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.8, 1.5, 32]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>
    </>
  );
};

const ThreeDPortfolio = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Ocean Realm Environment",
      description: "Immersive underwater world with marine life and coral reefs",
      category: "Environment Design",
      software: "Blender",
      tags: ["3D Modeling", "Texturing", "Lighting"],
      thumbnail: "/api/placeholder/300/200",
      isDefault: true
    },
    {
      id: 2,
      title: "Architectural Visualization",
      description: "Modern building design with realistic materials and lighting",
      category: "Architecture",
      software: "Blender",
      tags: ["Architecture", "Rendering", "Materials"],
      thumbnail: "/api/placeholder/300/200",
      isDefault: true
    },
    {
      id: 3,
      title: "Character Design",
      description: "Stylized character model with rigging and animation",
      category: "Character",
      software: "Blender",
      tags: ["Character", "Rigging", "Animation"],
      thumbnail: "/api/placeholder/300/200",
      isDefault: true
    }
  ]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const validTypes = ['.blend', '.obj', '.fbx', '.gltf', '.glb', '.stl'];
      return validTypes.some(type => file.name.toLowerCase().endsWith(type));
    });

    if (validFiles.length !== files.length) {
      toast.error("Some files were skipped. Only 3D files (.blend, .obj, .fbx, .gltf, .glb, .stl) are supported.");
    }

    if (validFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...validFiles]);
      
      // Create new project entries for uploaded files
      const newProjects: Project[] = validFiles.map((file, index) => ({
        id: Date.now() + index,
        title: file.name.split('.')[0],
        description: "Custom uploaded 3D project",
        category: "User Upload",
        software: "Various",
        tags: ["Custom", "Upload"],
        thumbnail: "/api/placeholder/300/200",
        file: file,
        isDefault: false
      }));
      
      setProjects(prev => [...prev, ...newProjects]);
      toast.success(`${validFiles.length} 3D project(s) uploaded successfully!`);
    }
  };

  const features = [
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "3D Modeling",
      description: "Complex geometric modeling and sculpting"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Texturing & Materials",
      description: "Realistic surface materials and UV mapping"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lighting & Rendering",
      description: "Advanced lighting setups and high-quality renders"
    }
  ];

  return (
    <section id="3d-portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            3D Design <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my 3D modeling, animation, and environmental design projects created with Blender
          </p>
        </div>

        {/* Interactive 3D Scene */}
        <Card className="mb-16 overflow-hidden bg-gradient-to-br from-card to-secondary/20 border-border/50">
          <div className="h-96 w-full">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
              <Scene3D />
              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Canvas>
          </div>
          <div className="p-6 text-center">
            <p className="text-muted-foreground">
              Interactive 3D scene - Click and drag to rotate, scroll to zoom
            </p>
          </div>
        </Card>

        {/* 3D Capabilities */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/30 transition-all duration-300 group hover:scale-105"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Upload Section */}
        <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-border/50 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Upload Your 3D Projects</h3>
            <p className="text-muted-foreground mb-6">
              Share your own 3D models and projects. Supports .blend, .obj, .fbx, .gltf, .glb, .stl files
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".blend,.obj,.fbx,.gltf,.glb,.stl"
                onChange={handleFileUpload}
                className="hidden"
              />
              
              <Button 
                onClick={() => fileInputRef.current?.click()}
                className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-200"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload 3D Files
              </Button>
              
              <div className="text-sm text-muted-foreground">
                {uploadedFiles.length > 0 && (
                  <span>{uploadedFiles.length} file(s) uploaded</span>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="overflow-hidden bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/30 transition-all duration-300 group hover:scale-105"
            >
              {/* Project Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Boxes className="w-12 h-12 text-primary/50" />
                </div>
                {!project.isDefault && (
                  <Badge 
                    variant="secondary" 
                    className="absolute top-2 right-2 bg-accent text-white"
                  >
                    Uploaded
                  </Badge>
                )}
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-primary/30">
                    {project.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{project.software}</span>
                </div>
                
                <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  
                  {project.file && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-200"
                      onClick={() => {
                        const url = URL.createObjectURL(project.file);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = project.file.name;
                        a.click();
                        URL.revokeObjectURL(url);
                      }}
                    >
                      <Download className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeDPortfolio;
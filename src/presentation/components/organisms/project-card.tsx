import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/presentation/components/atoms/card"

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, iusto voluptates eius ad, magnam sequi ipsa ipsum natus temporibus dicta iure dolorum mollitia optio voluptate reiciendis deserunt sunt tempora cum.",
  imageUrl = "https://miro.medium.com/v2/resize:fit:1358/1*moJeTvW97yShLB7URRj5Kg.png",
}) => (
  <Card
      className="pt-0 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="flex">
        <img src={imageUrl} alt="Project Image" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900">Ciência de Dados para Negócios</span>
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Controle de Obras</span>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">Desenvolvimento de Software Multiplataforma</span>
        </div>
      </CardFooter>
    </Card>
)
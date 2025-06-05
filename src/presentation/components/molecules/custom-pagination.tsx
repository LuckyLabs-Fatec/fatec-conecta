import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/presentation/components/atoms/pagination"

export const CustomPagination = () => {
  return (
    <Pagination className="pt-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#">Anterior</PaginationPrevious>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#">Próxima</PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

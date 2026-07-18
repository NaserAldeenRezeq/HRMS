namespace HRMS.Dtos.Employees
{
    // DTO : Data Transfar Objcet
    public class EmployeeDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string? Email { get; set; } // (?) => optional // Nullable
        public string PhoneNumber { get; set; } // 07, +96279
        public bool IsActive { get; set; }

        public decimal? Salary { get; set; }
        public long? DepartmentId { get; set; }
        public string? DepartmentName { get; set; }

        public long? ManagerId { get; set; }

        public string? ManagerName { get; set; }



    }
}



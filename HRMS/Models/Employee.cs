namespace HRMS.Models
{
    public class Employee
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? Email { get; set; } // (?) => optional // Nullable
        public string Position { get; set; }
        public DateTime BirthDate { get; set; }
        public string PhoneNumber { get; set; } // 07, +96279
        public bool IsActive { get; set; }
        public DateTime StartDate { get; set; } // Required
        public DateTime? EndDate { get; set; } // Nullable
        public decimal? Salary { get; set; } // Nullable
    }
}

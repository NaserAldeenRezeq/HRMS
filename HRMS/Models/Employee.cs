using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HRMS.Models
{
    public class Employee
    {
        [Key] // Data Annotations
        public long Id { get; set; }

        [MaxLength(50)] // Data Annotations
        public string FirstName { get; set; }

        [MaxLength(50)]
        public string LastName { get; set; }

        [MaxLength(50)]
        public string? Email { get; set; } // (?) => optional // Nullable

        [MaxLength(50)] 
        public string Position { get; set; } 
        public DateTime BirthDate { get; set; }

        [MaxLength(50)]
        public string PhoneNumber { get; set; } // 07, +96279
        public bool IsActive { get; set; }
        public DateTime StartDate { get; set; } // Required
        public DateTime? EndDate { get; set; } // Nullable
        public decimal? Salary { get; set; } // Nullable

        
        [ForeignKey("Department")] // Data Annotations
        public long? DepartmentId { get; set; }
        public Department? Department { get; set; } // Navigation Property


        [ForeignKey("Manager")] // Data Annotations
        public long? ManagerId { get; set; }
        public Employee? Manager { get; set; } // Navigation Property

    }
}

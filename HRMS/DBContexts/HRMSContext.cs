
using HRMS.Models;
using Microsoft.EntityFrameworkCore;

namespace HRMS.DBContexts
{
    public class HRMSContext : DbContext
    {
        public HRMSContext(DbContextOptions<HRMSContext> options): base(options) 
        {
            // Options
            // 1) which database? (sql server, oracle, mysql....)
            // 2) Connection String
            // 
        }

        // Tables => DbSet

        public DbSet<Employee> Employees { get; set; }

        public DbSet<Department> Departments { get; set; }



    }
}

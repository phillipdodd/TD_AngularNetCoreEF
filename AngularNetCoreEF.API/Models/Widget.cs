using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;

namespace AngularNetCoreEF.API.Models
{
    public class Widget
    {
        [Key]
        public Guid Id { get; set; }
        
        [Required]
        [MaxLength(50, ErrorMessage = "Name cannot exceed 50 characters")]
        public string Name { get; set; }

        public bool Active { get; set; }
    }
}

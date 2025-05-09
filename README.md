Note for project,
* The project build full stack for oh-studio websit 
-Backend asp.net core Api ,SqlServer ,entity framework ,ORN 
-Frontend  React.js , Html ,CSS , bootstrab 

==> Configration to run project full stack:
The database,
=================================================================================================================================================================
USE [oh-studio]
GO
/****** Object:  Table [dbo].[card]    Script Date: 5/9/2025 9:40:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[card](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[titel] [nvarchar](50) NOT NULL,
	[description] [nvarchar](100) NOT NULL,
	[urlImage] [nvarchar](500) NULL,
	[companyName] [nvarchar](500) NOT NULL,
 CONSTRAINT [PK_card] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
================================================================================================================================================================

-to conect database need scafold commant
( Scaffold-DbContext "Server=#####;Database=oh-studio;User Id=sa;Password=#####;Trusted_Connection=False;Encrypt=True;TrustServerCertificate=True"
  Microsoft.EntityFrameworkCore.SqlServer -OutputDir Entities -Force )
-The code run on termenal after make api project Set start up , in Microsoft visual studio
- after run success and conecct data base
- Go to run multiple both project sol.Api and sol.ui ,
==> other can run frontend only ,
==================================================================================================================================================================
* The websit hapitc-studio build static webite linked for oh-studio for both word **Hapitc**
  -Frontend React.js , CSS , Html
==================================================================================================================================================================
run use
npm start

---------------------------------------------------------------------

Note => 1) portfolio component contain code oh-studio dynamic 
        2) remain components refer to hapitc studio 


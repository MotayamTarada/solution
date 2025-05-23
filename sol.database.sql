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

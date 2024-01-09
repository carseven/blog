---
draft: false
title: "Example"
image:
  { src: "/assets/comoda-despefecto-cerca.jpeg", alt: "Image alt" }
publishDate: "2024-01-07"
category: ""
author: "Carles Serra"
tags: ["typescript","type-safe"]
---
 
  
# Title 1


Lorem ipsum dolor sit amet consectetur adipiscing elit euismod rutrum, consequat fringilla ultricies nullam curae mollis semper conubia viverra, orci aenean dapibus pharetra nec tortor tellus cubilia. Ullamcorper mi lectus eu malesuada tempor massa praesent magna mattis posuere, lobortis vulputate ut duis magnis parturient habitant nibh id tristique, quis suspendisse donec nisl penatibus sem non feugiat taciti. Mollis per ridiculus integer cursus semper vestibulum fermentum penatibus cubilia blandit scelerisque, tempus platea leo posuere ac pharetra volutpat aliquet euismod id ullamcorper lobortis, urna est magna mus rhoncus massa curae libero praesent eget. Mattis malesuada vestibulum quis ac nam phasellus suscipit facilisis libero diam posuere, cursus massa vehicula neque imperdiet tincidunt dui egestas lacinia mollis aliquet orci, nisl curabitur dapibus litora dis cum nostra montes ligula praesent. Facilisi aliquam convallis molestie tempor blandit ultricies bibendum parturient cubilia quam, porttitor morbi torquent tempus taciti nec faucibus elementum phasellus, quis inceptos vestibulum gravida augue potenti eget nunc maecenas. Tempor facilisis ligula volutpat habitant consequat inceptos orci per potenti blandit platea, mus sapien eget vel libero vestibulum augue cubilia ut ultrices fringilla lectus, imperdiet pellentesque cum ridiculus convallis sollicitudin nisl interdum semper felis.


## Title 2


Lorem ipsum dolor sit amet consectetur adipiscing elit euismod rutrum, consequat fringilla ultricies nullam curae mollis semper conubia viverra, orci aenean dapibus pharetra nec tortor tellus cubilia. Ullamcorper mi lectus eu malesuada tempor massa praesent magna mattis posuere, lobortis vulputate ut duis magnis parturient habitant nibh id tristique, quis suspendisse donec nisl penatibus sem non feugiat taciti. Mollis per ridiculus integer cursus semper vestibulum fermentum penatibus cubilia blandit scelerisque, tempus platea leo posuere ac pharetra volutpat aliquet euismod id ullamcorper lobortis, urna est magna mus rhoncus massa curae libero praesent eget. Mattis malesuada vestibulum quis ac nam phasellus suscipit facilisis libero diam posuere, cursus massa vehicula neque imperdiet tincidunt dui egestas lacinia mollis aliquet orci, nisl curabitur dapibus litora dis cum nostra montes ligula praesent. Facilisi aliquam convallis molestie tempor blandit ultricies bibendum parturient cubilia quam, porttitor morbi torquent tempus taciti nec faucibus elementum phasellus, quis inceptos vestibulum gravida augue potenti eget nunc maecenas. Tempor facilisis ligula volutpat habitant consequat inceptos orci per potenti blandit platea, mus sapien eget vel libero vestibulum augue cubilia ut ultrices fringilla lectus, imperdiet pellentesque cum ridiculus convallis sollicitudin nisl interdum semper felis.


### Title 3


Lorem ipsum dolor sit amet consectetur adipiscing elit euismod rutrum, consequat fringilla ultricies nullam curae mollis semper conubia viverra, orci aenean dapibus pharetra nec tortor tellus cubilia. Ullamcorper mi lectus eu malesuada tempor massa praesent magna mattis posuere, lobortis vulputate ut duis magnis parturient habitant nibh id tristique, quis suspendisse donec nisl penatibus sem non feugiat taciti. Mollis per ridiculus integer cursus semper vestibulum fermentum penatibus cubilia blandit scelerisque, tempus platea leo posuere ac pharetra volutpat aliquet euismod id ullamcorper lobortis, urna est magna mus rhoncus massa curae libero praesent eget. Mattis malesuada vestibulum quis ac nam phasellus suscipit facilisis libero diam posuere, cursus massa vehicula neque imperdiet tincidunt dui egestas lacinia mollis aliquet orci, nisl curabitur dapibus litora dis cum nostra montes ligula praesent. Facilisi aliquam convallis molestie tempor blandit ultricies bibendum parturient cubilia quam, porttitor morbi torquent tempus taciti nec faucibus elementum phasellus, quis inceptos vestibulum gravida augue potenti eget nunc maecenas. Tempor facilisis ligula volutpat habitant consequat inceptos orci per potenti blandit platea, mus sapien eget vel libero vestibulum augue cubilia ut ultrices fringilla lectus, imperdiet pellentesque cum ridiculus convallis sollicitudin nisl interdum semper felis.

- Ejemplo
- Ejemplo
- Ejemplo
- [ ] Ejemplo
- [ ] Ejmplo
- [ ] ejemplo

```typescript
const UserRoles = {
  User: "user",
  Admin: "admin",
  Staff: "staff",
} as const;
type UserRole = ObjectValues<typeof UserRoles>;
```


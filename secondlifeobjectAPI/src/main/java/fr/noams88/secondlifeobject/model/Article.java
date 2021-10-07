package fr.noams88.secondlifeobject.model;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
@Table(name = "articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 50)
    private String name;

    private String description;

    private LocalDateTime auctionStartDate;

    private LocalDateTime auctionEndDate;

    private int initialPrice;

    private int finalPrice;

    private String saleStatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id", nullable=false)
    private User user;
}

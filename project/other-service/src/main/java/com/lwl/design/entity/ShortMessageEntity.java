package com.lwl.design.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "short_message", schema = "my_system", catalog = "")
public class ShortMessageEntity {
    private int id;
    private Integer senderId;
    private Integer receiverId;
    private String content;
    private Integer state;
    private Integer createdAt;
    private Integer readAt;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "sender_id")
    public Integer getSenderId() {
        return senderId;
    }

    public void setSenderId(Integer senderId) {
        this.senderId = senderId;
    }

    @Basic
    @Column(name = "receiver_id")
    public Integer getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(Integer receiverId) {
        this.receiverId = receiverId;
    }

    @Basic
    @Column(name = "content")
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Basic
    @Column(name = "state")
    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    @Basic
    @Column(name = "created_at")
    public Integer getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Integer createdAt) {
        this.createdAt = createdAt;
    }

    @Basic
    @Column(name = "read_at")
    public Integer getReadAt() {
        return readAt;
    }

    public void setReadAt(Integer readAt) {
        this.readAt = readAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ShortMessageEntity that = (ShortMessageEntity) o;
        return id == that.id &&
                Objects.equals(senderId, that.senderId) &&
                Objects.equals(receiverId, that.receiverId) &&
                Objects.equals(content, that.content) &&
                Objects.equals(state, that.state) &&
                Objects.equals(createdAt, that.createdAt) &&
                Objects.equals(readAt, that.readAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, senderId, receiverId, content, state, createdAt, readAt);
    }
}
